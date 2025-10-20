import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import userRoute from './routes/userRoute.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import ApiErrorHandler from './utils/ApiErrorHandler.js';

const app = express();

// Parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// HTTP request logger (only in development)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// API routes for user operations
app.use('/api/users', userRoute);

// Catch all undefined routes (404)
app.use((req, res, next) => {
    next(new ApiErrorHandler(`The route ${req.originalUrl} does not exist`, 404));
});

// Global error handler
app.use(errorHandlerMiddleware);

export default app;
