import express from 'express';
import {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  updateAdminProfile
} from '../controllers/authController.js';
import { withAuth } from '../models/utils/auth.js';

const router = express.Router();

// Public routes
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// Protected routes
router.get('/me', withAuth(getAdminProfile, 'admin'));
router.put('/profile', withAuth(updateAdminProfile, 'admin'));

export default router; 