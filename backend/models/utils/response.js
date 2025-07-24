import { NextResponse } from 'next/server';

// Success response helper
export const successResponse = (data, message = 'Success', status = 200) => {
  return NextResponse.json({
    success: true,
    message,
    data
  }, { status });
};

// Error response helper
export const errorResponse = (message = 'Internal server error', status = 500, errors = null) => {
  const response = {
    success: false,
    message
  };

  if (errors) {
    response.errors = errors;
  }

  return NextResponse.json(response, { status });
};

// Validation error response
export const validationErrorResponse = (errors) => {
  return errorResponse('Validation error', 400, errors);
};

// Not found response
export const notFoundResponse = (message = 'Resource not found') => {
  return errorResponse(message, 404);
};

// Unauthorized response
export const unauthorizedResponse = (message = 'Unauthorized') => {
  return errorResponse(message, 401);
};

// Forbidden response
export const forbiddenResponse = (message = 'Forbidden') => {
  return errorResponse(message, 403);
}; 