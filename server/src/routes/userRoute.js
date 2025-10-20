import express from 'express';
import { logIn, register } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import validationMiddleware from '../middlewares/validationMiddleware.js';
import { logInSchema, registerSchema } from '../validations/userValidation.js';

const router = express.Router();

/**
 * @route POST /api/users/register
 * @desc Register a new user
 * @access Public
 */
router.post('/register', validationMiddleware(registerSchema), register);

/**
 * @route POST /api/users/login
 * @desc Login a user
 * @access Public
 */
router.post('/login', validationMiddleware(logInSchema), logIn);

/**
 * @route GET /api/users/profile
 * @desc Get the profile of logged-in user
 * @access Protected
 */
router.get('/profile', authMiddleware, (req, res) => {
    res.status(200).send(`Hello Mr ${req.user.firstName}, your role is: ${req.user.role}`);
});

export default router;
