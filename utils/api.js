// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000/api';

// API utility functions
export const api = {
  // Base fetch function with error handling
  async fetch(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    // Add authorization header if token exists
    const token = localStorage.getItem('adminToken');
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // GET request
  async get(endpoint) {
    return this.fetch(endpoint);
  },

  // POST request
  async post(endpoint, data) {
    return this.fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // PUT request
  async put(endpoint, data) {
    return this.fetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // DELETE request
  async delete(endpoint) {
    return this.fetch(endpoint, {
      method: 'DELETE',
    });
  },
};

// Auth API functions
export const authAPI = {
  // Login admin
  async login(credentials) {
    return api.post('/auth/login', credentials);
  },

  // Register admin
  async register(adminData) {
    return api.post('/auth/register', adminData);
  },

  // Get admin profile
  async getProfile() {
    return api.get('/auth/me');
  },

  // Update admin profile
  async updateProfile(profileData) {
    return api.put('/auth/profile', profileData);
  },
};

// Projects API functions
export const projectsAPI = {
  // Get all projects
  async getAll(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/projects${queryString ? `?${queryString}` : ''}`);
  },

  // Get featured projects
  async getFeatured() {
    return api.get('/projects/featured');
  },

  // Get projects by category
  async getByCategory(category, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/projects/category/${category}${queryString ? `?${queryString}` : ''}`);
  },

  // Get single project
  async getById(id) {
    return api.get(`/projects/${id}`);
  },

  // Create project
  async create(projectData) {
    return api.post('/projects', projectData);
  },

  // Update project
  async update(id, projectData) {
    return api.put(`/projects/${id}`, projectData);
  },

  // Delete project
  async delete(id) {
    return api.delete(`/projects/${id}`);
  },
};

// Contact API functions
export const contactAPI = {
  // Submit contact form
  async submit(contactData) {
    return api.post('/contact', contactData);
  },

  // Get all contacts (admin only)
  async getAll(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/contact${queryString ? `?${queryString}` : ''}`);
  },

  // Get contact statistics (admin only)
  async getStats() {
    return api.get('/contact/stats');
  },

  // Get single contact (admin only)
  async getById(id) {
    return api.get(`/contact/${id}`);
  },

  // Update contact status (admin only)
  async update(id, contactData) {
    return api.put(`/contact/${id}`, contactData);
  },

  // Delete contact (admin only)
  async delete(id) {
    return api.delete(`/contact/${id}`);
  },
};

// Testimonials API functions
export const testimonialsAPI = {
  // Get all testimonials
  async getAll(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/testimonials${queryString ? `?${queryString}` : ''}`);
  },

  // Get featured testimonials
  async getFeatured() {
    return api.get('/testimonials/featured');
  },

  // Get single testimonial
  async getById(id) {
    return api.get(`/testimonials/${id}`);
  },

  // Submit testimonial
  async submit(testimonialData) {
    return api.post('/testimonials', testimonialData);
  },

  // Update testimonial (admin only)
  async update(id, testimonialData) {
    return api.put(`/testimonials/${id}`, testimonialData);
  },

  // Delete testimonial (admin only)
  async delete(id) {
    return api.delete(`/testimonials/${id}`);
  },

  // Approve testimonial (admin only)
  async approve(id) {
    return api.put(`/testimonials/${id}/approve`);
  },

  // Toggle featured status (admin only)
  async toggleFeatured(id) {
    return api.put(`/testimonials/${id}/toggle-featured`);
  },
};

// Auth utility functions
export const authUtils = {
  // Check if user is authenticated
  isAuthenticated() {
    const token = localStorage.getItem('adminToken');
    return !!token;
  },

  // Get current user
  getCurrentUser() {
    const user = localStorage.getItem('adminUser');
    return user ? JSON.parse(user) : null;
  },

  // Logout user
  logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.href = '/admin/login';
  },

  // Set auth data
  setAuthData(token, user) {
    localStorage.setItem('adminToken', token);
    localStorage.setItem('adminUser', JSON.stringify(user));
  },
};

export default api; 