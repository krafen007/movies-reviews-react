import jwt from 'jsonwebtoken';
import ApiErrorHandler from '../utils/ApiErrorHandler.js';
import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';

/**
 * @desc Middleware to protect routes, ensures user is authenticated
 * @access Protected
 */
const authMiddleware = asyncHandler(async (req, res, next) => {
    // Get the token from Authorization header
    const authHead = req.headers.authorization;

    // Check if header exists and starts with Bearer
    if (!authHead || !authHead.startsWith('Bearer ')) {
        throw new ApiErrorHandler('Not authorized, Token missing or malformed', 401);
    }

    const token = authHead.split(' ')[1];

    let decoded;

    // Verify the JWT token
    try {
        decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        throw new ApiErrorHandler('Not authorized: invalid or expired token', 401);
    }

    // Find user by ID from decoded token
    const user = await userModel.findById(decoded.userId);

    if (!user) {
        throw new ApiErrorHandler('Not authorized, invalid or expired token', 401);
    }

    // Attach user to request object for later use
    req.user = user;

    next();
});

export default authMiddleware;
