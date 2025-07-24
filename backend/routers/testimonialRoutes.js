import express from 'express';
import {
  getTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getFeaturedTestimonials,
  approveTestimonial,
  toggleFeatured
} from '../controllers/testimonialController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getTestimonials);
router.get('/featured', getFeaturedTestimonials);
router.get('/:id', getTestimonial);
router.post('/', createTestimonial);

// Protected routes
router.put('/:id', protect, updateTestimonial);
router.delete('/:id', protect, deleteTestimonial);
router.put('/:id/approve', protect, approveTestimonial);
router.put('/:id/toggle-featured', protect, toggleFeatured);

export default router; 