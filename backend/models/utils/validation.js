import Joi from 'joi';

// Contact form validation schema
export const contactSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 50 characters',
    'any.required': 'Name is required'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required'
  }),
  subject: Joi.string().min(5).max(100).required().messages({
    'string.min': 'Subject must be at least 5 characters long',
    'string.max': 'Subject cannot exceed 100 characters',
    'any.required': 'Subject is required'
  }),
  message: Joi.string().min(10).max(1000).required().messages({
    'string.min': 'Message must be at least 10 characters long',
    'string.max': 'Message cannot exceed 1000 characters',
    'any.required': 'Message is required'
  }),
  phone: Joi.string().pattern(/^[\+]?[1-9][\d]{0,15}$/).optional().messages({
    'string.pattern.base': 'Please provide a valid phone number'
  }),
  company: Joi.string().max(100).optional(),
  budget: Joi.string().valid('Under $1000', '$1000-$5000', '$5000-$10000', '$10000+', 'Not specified').optional(),
  timeline: Joi.string().valid('Immediate', '1-2 weeks', '1-2 months', '3+ months', 'Not specified').optional()
});

// Project validation schema
export const projectSchema = Joi.object({
  id: Joi.string().min(3).max(50).required(),
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(500).required(),
  url: Joi.string().uri().required(),
  link: Joi.string().uri().required(),
  github: Joi.string().uri().required(),
  technologies: Joi.array().items(Joi.string()).min(1).required(),
  features: Joi.array().items(Joi.string()).min(1).required(),
  duration: Joi.string().required(),
  teamSize: Joi.string().required(),
  category: Joi.string().required(),
  imageUrl: Joi.string().uri().required(),
  featured: Joi.boolean().optional()
});

// Testimonial validation schema
export const testimonialSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  position: Joi.string().min(2).max(50).required(),
  message: Joi.string().min(10).max(500).required(),
  avatarUrl: Joi.string().uri().optional(),
  screenshotUrl: Joi.string().uri().optional(),
  rating: Joi.number().min(1).max(5).optional(),
  featured: Joi.boolean().optional()
});

// Admin login validation schema
export const adminLoginSchema = Joi.object({
  username: Joi.string().min(3).max(50).required().messages({
    'string.min': 'Username must be at least 3 characters long',
    'string.max': 'Username cannot exceed 50 characters',
    'any.required': 'Username is required'
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'any.required': 'Password is required'
  })
});

// Admin registration validation schema
export const adminRegisterSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    'string.min': 'Username must be at least 3 characters long',
    'string.max': 'Username cannot exceed 30 characters',
    'any.required': 'Username is required'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required'
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'any.required': 'Password is required'
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords must match',
    'any.required': 'Please confirm your password'
  }),
  role: Joi.string().valid('admin', 'super_admin').optional()
});

// Admin update validation schema
export const adminUpdateSchema = Joi.object({
  username: Joi.string().min(3).max(30).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(6).optional(),
  role: Joi.string().valid('admin', 'super_admin').optional(),
  isActive: Joi.boolean().optional()
});

// Validation middleware
export const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.details.map(detail => detail.message)
      });
    }
    next();
  };
}; 