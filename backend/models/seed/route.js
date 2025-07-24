import { NextResponse } from 'next/server';
import dbConnect from '../db/connection';
import Project from '../models/Project';
import Testimonial from '../models/Testimonial';
import Admin from '../models/Admin';
import { showcase, testimonialData } from '../../constant/data';

export async function POST(request) {
  try {
    // Connect to database
    await dbConnect();

    // Clear existing data
    await Project.deleteMany({});
    await Testimonial.deleteMany({});
    await Admin.deleteMany({});

    // Create default admin user
    const defaultAdmin = new Admin({
      username: 'admin',
      email: 'admin@thesakibdev.com',
      password: 'admin123',
      role: 'super_admin'
    });
    await defaultAdmin.save();

    // Seed projects
    const projectsToSeed = [];
    showcase.slides.forEach(slide => {
      slide.images.forEach(image => {
        projectsToSeed.push({
          id: image.id,
          title: image.title,
          description: image.description,
          url: image.url,
          link: image.link,
          github: image.github,
          technologies: image.technologies,
          features: image.features,
          duration: image.duration,
          teamSize: image.teamSize,
          category: image.category,
          imageUrl: image.url,
          featured: image.id === 'chemistrywala' || image.id === 'theislamics' // Mark main projects as featured
        });
      });
    });

    const seededProjects = await Project.insertMany(projectsToSeed);

    // Seed testimonials
    const testimonialsToSeed = testimonialData.map((testimonial, index) => ({
      name: testimonial.name,
      position: testimonial.position,
      message: testimonial.message,
      avatarUrl: testimonial.url || '',
      screenshotUrl: testimonial.screenshotUrl || '',
      rating: 5,
      featured: index < 3, // First 3 testimonials are featured
      approved: true
    }));

    const seededTestimonials = await Testimonial.insertMany(testimonialsToSeed);

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully',
      data: {
        admin: {
          username: defaultAdmin.username,
          email: defaultAdmin.email,
          role: defaultAdmin.role
        },
        projects: seededProjects.length,
        testimonials: seededTestimonials.length
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    // Connect to database
    await dbConnect();

    // Get counts
    const projectCount = await Project.countDocuments();
    const testimonialCount = await Testimonial.countDocuments();
    const adminCount = await Admin.countDocuments();

    return NextResponse.json({
      success: true,
      data: {
        projects: projectCount,
        testimonials: testimonialCount,
        admins: adminCount
      }
    });

  } catch (error) {
    console.error('Get seed status error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { status: 500 });
  }
} 