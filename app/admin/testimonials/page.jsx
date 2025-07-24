'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '../../../components/AdminLayout';
import {
  HiChatBubbleBottomCenterText,
  HiStar,
  HiEye,
  HiTrash,
  HiSearch,
  HiFilter,
  HiCheck,
  HiX,
  HiPencil
} from 'react-icons/hi';
import { testimonialsAPI } from '../../../utils/api';

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showFeatured, setShowFeatured] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, [searchTerm, selectedStatus, showFeatured]);

  const fetchTestimonials = async () => {
    try {
      const params = {};
      if (searchTerm) params.search = searchTerm;
      if (selectedStatus) params.approved = selectedStatus === 'approved' ? 'true' : 'false';
      if (showFeatured) params.featured = 'true';
      params.limit = '50';

      const data = await testimonialsAPI.getAll(params);
      setTestimonials(data.data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (testimonialId) => {
    try {
      await testimonialsAPI.approve(testimonialId);
      setTestimonials(testimonials.map(testimonial => 
        testimonial._id === testimonialId ? { ...testimonial, approved: true } : testimonial
      ));
    } catch (error) {
      console.error('Error approving testimonial:', error);
    }
  };

  const handleToggleFeatured = async (testimonialId, currentFeatured) => {
    try {
      await testimonialsAPI.toggleFeatured(testimonialId);
      setTestimonials(testimonials.map(testimonial => 
        testimonial._id === testimonialId ? { ...testimonial, featured: !currentFeatured } : testimonial
      ));
    } catch (error) {
      console.error('Error toggling featured status:', error);
    }
  };

  const handleDelete = async (testimonialId) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      await testimonialsAPI.delete(testimonialId);
      setTestimonials(testimonials.filter(testimonial => testimonial._id !== testimonialId));
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const getStatusColor = (approved) => {
    return approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  if (loading) {
    return (
      <AdminLayout currentPage="Testimonials">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout currentPage="Testimonials">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
            <p className="text-gray-600">Manage client testimonials</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
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
              onClick={fetchTestimonials}
              className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <HiFilter className="w-4 h-4 mr-2" />
              Apply
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <HiStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{testimonial.message}"
                  </p>
                </div>

                {/* Status and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(testimonial.approved)}`}>
                      {testimonial.approved ? 'Approved' : 'Pending'}
                    </span>
                    {testimonial.featured && (
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    {!testimonial.approved && (
                      <button
                        onClick={() => handleApprove(testimonial._id)}
                        className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                        title="Approve testimonial"
                      >
                        <HiCheck className="w-4 h-4" />
                      </button>
                    )}
                    
                    <button
                      onClick={() => handleToggleFeatured(testimonial._id, testimonial.featured)}
                      className={`p-2 rounded-lg transition-colors ${
                        testimonial.featured
                          ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      title={testimonial.featured ? 'Remove from featured' : 'Mark as featured'}
                    >
                      <HiStar className={`w-4 h-4 ${testimonial.featured ? 'fill-current' : ''}`} />
                    </button>
                    
                    <button
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                      title="Edit testimonial"
                    >
                      <HiPencil className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleDelete(testimonial._id)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      title="Delete testimonial"
                    >
                      <HiTrash className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Date */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Submitted on {new Date(testimonial.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {testimonials.length === 0 && (
          <div className="text-center py-12">
            <HiChatBubbleBottomCenterText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No testimonials found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
} 