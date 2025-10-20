/**
 * @desc Global error handling middleware for the API
 * @access Public
 */
const errorHandlerMiddleware = (err, req, res, next) => {
    // Set status code (default 500 if not specified)
    const statusCode = err.statusCode || 500;

    // Send JSON response with error details
    res.status(statusCode).json({
        success: false,
        statusCode,
        // Determine if it's a client (4xx) or server (5xx) error
        status: `${statusCode}`.startsWith(4) ? 'Fail' : 'Error',
        message: err.message,
        // Include stack trace only in development mode
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};

export default errorHandlerMiddleware;
