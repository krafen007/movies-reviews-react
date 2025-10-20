import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import ApiErrorHandler from './../utils/ApiErrorHandler.js';

/**
 * Handles user registration
 * @param {Object} param0 - user details
 * @returns {Object} - user object with JWT token (password excluded)
 */
export const registerHandler = async ({ firstName, lastName, email, password }) => {
    // Check if user already exists
    const findUser = await userModel.findOne({ email });
    if (findUser) {
        throw new ApiErrorHandler('User already exists!', 409);
    }

    // Hash user password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await userModel.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    const user = newUser.toObject();

    // Generate JWT token valid for 1 day
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

    user.token = token;
    delete user.password; // Remove password from returned object

    return user;
};

/**
 * Handles user login
 * @param {Object} param0 - login credentials
 * @returns {Object} - user object with JWT token (password excluded)
 */
export const logInHandler = async ({ email, password }) => {
    // Find user and include password field
    const findUser = await userModel.findOne({ email }).select('+password');
    if (!findUser) {
        throw new ApiErrorHandler('No user found with this email!', 404);
    }

    // Compare passwords
    const passwordMatching = await bcrypt.compare(password, findUser.password);
    if (!passwordMatching) {
        throw new ApiErrorHandler('Invalid password, please try again', 401);
    }

    const user = findUser.toObject();

    // Generate JWT token valid for 1 day
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    user.token = token;

    delete user.password; // Remove password from returned object

    return user;
};
