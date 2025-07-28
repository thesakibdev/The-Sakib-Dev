import { useRouter } from 'next/router';
import { showcase } from '@/app/constant/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import fadeIn from '@/components/Variants';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaPlay, FaCalendar, FaUsers, FaCode, FaCheckCircle, FaTag } from 'react-icons/fa';
import { BiTime, BiUser } from 'react-icons/bi';
import { HiCode, HiLightningBolt } from 'react-icons/hi';
import Image from 'next/image';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the project data
  let project = null;
  showcase.slides.forEach(slide => {
    // Check if slide has images array (nested structure)
    if (slide.images && Array.isArray(slide.images)) {
      slide.images.forEach(image => {
        if (image.id === id) {
          project = image;
        }
      });
    }
    // Check if slide is a direct project object
    else if (slide.id === id) {
      project = slide;
    }
  });

  if (!project) {
    return (
      <div className="padding-container max-container py-12 xl:py-32 flexCenter min-h-screen">
        <div className="text-center">
          <h2 className="h2 mb-4">Project Not Found</h2>
          <p className="mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/showcase" className="btn_dark_rounded px-6 py-3">
            Back to Showcase
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="padding-container max-container py-12">
      {/* Back Button */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mb-8"
      >
        <Link 
          href="/showcase" 
          className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors duration-300"
        >
          <FaArrowLeft className="text-sm" />
          Back to Showcase
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center mb-16"
      >
        <div className="mb-6">
          <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
        <h1 className="h1 mb-6">{project.title}</h1>
        <p className="text-gray-20 max-w-3xl mx-auto text-lg leading-relaxed">
          {project.description}
        </p>
      </motion.div>

      {/* Project Hero Image */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mb-16"
      >
        <div className="relative rounded-lg overflow-hidden">
          <Image 
            src={project.url} 
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap gap-4">
              <Link 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-white hover:text-secondary transition-all duration-300 flex items-center gap-2"
              >
                <FaPlay />
                Live Demo
              </Link>
              <Link 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary text-white px-6 py-3 rounded-full hover:bg-white hover:text-secondary transition-all duration-300 flex items-center gap-2"
              >
                <FaGithub />
                View Code
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Project Info */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="lg:col-span-2 space-y-8"
        >
          {/* Project Overview */}
          <div className="bg-tertiary rounded-lg p-6">
            <h3 className="h3 mb-4 flex items-center gap-2">
              <HiLightningBolt className="text-secondary" />
              Project Overview
            </h3>
            <p className="text-gray-20 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="bg-tertiary rounded-lg p-6">
            <h3 className="h3 mb-4 flex items-center gap-2">
              <HiCode className="text-secondary" />
              Technologies & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.technologies.map((tech, techIndex) => (
                <div 
                  key={techIndex}
                  className="bg-secondary/20 text-secondary px-4 py-3 rounded-lg text-center font-medium hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-tertiary rounded-lg p-6">
            <h3 className="h3 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-20">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Meta */}
        <motion.div
          variants={fadeIn("up", 1.0)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="space-y-6"
        >
          {/* Project Stats */}
          <div className="bg-tertiary rounded-lg p-6">
            <h3 className="h3 mb-4">Project Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BiTime className="text-secondary text-xl" />
                <div>
                  <p className="text-gray-20 text-sm">Duration</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BiUser className="text-secondary text-xl" />
                <div>
                  <p className="text-gray-20 text-sm">Team Size</p>
                  <p className="font-medium">{project.teamSize}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaCode className="text-secondary text-xl" />
                <div>
                  <p className="text-gray-20 text-sm">Technologies</p>
                  <p className="font-medium">{project.technologies.length} used</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaTag className="text-secondary text-xl" />
                <div>
                  <p className="text-gray-20 text-sm">Category</p>
                  <p className="font-medium">{project.category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-tertiary rounded-lg p-6">
            <h3 className="h3 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-secondary text-white px-4 py-3 rounded-lg hover:bg-white hover:text-secondary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaExternalLinkAlt />
                Visit Live Site
              </Link>
              <Link 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-tertiary border border-secondary text-white px-4 py-3 rounded-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaGithub />
                View Source Code
              </Link>
            </div>
          </div>

          {/* Project Category */}
          <div className="bg-tertiary rounded-lg p-6">
            <h3 className="h3 mb-4">Project Category</h3>
            <div className="flex items-center gap-3">
              <div className="bg-secondary/20 text-secondary p-3 rounded-lg">
                <FaTag className="text-xl" />
              </div>
              <div>
                <p className="font-medium">{project.category}</p>
                <p className="text-gray-20 text-sm">Project Type</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="bg-tertiary rounded-lg p-8 text-center"
      >
        <h3 className="h3 mb-4">Interested in Similar Projects?</h3>
        <p className="text-gray-20 mb-6 max-w-2xl mx-auto">
          I can help you create a similar project or customize it according to your specific needs. 
          Let's discuss your requirements and bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="btn_dark_rounded px-8 py-4 text-lg hover:bg-secondary transition-all duration-300"
          >
            Start Your Project
          </Link>
          <Link 
            href="/showcase" 
            className="btn_light_rounded px-8 py-4 text-lg hover:bg-secondary transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails; 