import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import userRoute from './routes/userRoute.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import ApiErrorHandler from './utils/ApiErrorHandler.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Routes
app.use('/api/users', userRoute);

// Handle undefined routes (404 Not Found)
app.use((req, res, next) => {
    next(new ApiErrorHandler(`The route ${req.originalUrl} does not exist`, 404));
});

// Error Handler
app.use(errorHandlerMiddleware);

export default app;
