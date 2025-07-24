'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '../../../components/AdminLayout';
import {
  HiPlus,
  HiPencil,
  HiTrash,
  HiEye,
  HiStar,
  HiSearch,
  HiFilter
} from 'react-icons/hi';
import { projectsAPI } from '../../../utils/api';

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [showFeatured, setShowFeatured] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [searchTerm, selectedCategory, showFeatured]);

  const fetchProjects = async () => {
    try {
      const params = {};
      if (searchTerm) params.search = searchTerm;
      if (selectedCategory) params.category = selectedCategory;
      if (showFeatured) params.featured = 'true';
      params.limit = '50';

      const data = await projectsAPI.getAll(params);

      if (data.success) {
        setProjects(data.data);
        // Extract unique categories from projects
        const uniqueCategories = [...new Set(data.data.map(project => project.category))];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (projectId) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await projectsAPI.delete(projectId);
      setProjects(projects.filter(p => p._id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const toggleFeatured = async (projectId, currentFeatured) => {
    try {
      await projectsAPI.update(projectId, { featured: !currentFeatured });
      setProjects(projects.map(p => 
        p._id === projectId ? { ...p, featured: !currentFeatured } : p
      ));
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  if (loading) {
    return (
      <AdminLayout currentPage="Projects">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout currentPage="Projects">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">Manage your portfolio projects</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <HiPlus className="w-5 h-5 mr-2" />
            Add Project
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showFeatured}
                onChange={(e) => setShowFeatured(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Featured only</span>
            </label>

            <button
              onClick={fetchProjects}
              className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <HiFilter className="w-4 h-4 mr-2" />
              Apply
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2">
                    <HiStar className="w-6 h-6 text-yellow-400 fill-current" />
                  </div>
                )}
                <div className="absolute top-2 left-2">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <p>Duration: {project.duration}</p>
                    <p>Team: {project.teamSize}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleFeatured(project._id, project.featured)}
                      className={`p-2 rounded-lg transition-colors ${
                        project.featured
                          ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      title={project.featured ? 'Remove from featured' : 'Mark as featured'}
                    >
                      <HiStar className={`w-4 h-4 ${project.featured ? 'fill-current' : ''}`} />
                    </button>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                      title="View project"
                    >
                      <HiEye className="w-4 h-4" />
                    </a>
                    
                    <button
                      className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                      title="Edit project"
                    >
                      <HiPencil className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      title="Delete project"
                    >
                      <HiTrash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <HiRectangleGroup className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
} 