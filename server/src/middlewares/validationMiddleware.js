/**
 * @desc Middleware to validate request body using Joi schema
 * @param {object} schema - Joi validation schema
 * @access Public (can be used for any route)
 */
const validationMiddleware = (schema) => {
    return (req, res, next) => {
        try {
            // Validate request body against the provided schema
            const { error } = schema.validate(req.body, { abortEarly: false });

            if (error) {
                // Map Joi errors to an array of {field, message}
                const details = error.details.map((err) => {
                    return { field: err.path[0], message: err.message };
                });

                return res.status(400).json({
                    message: 'Validation error',
                    error: details,
                });
            }

            // No validation errors, proceed to next middleware/controller
            next();
        } catch (error) {
            // Catch unexpected errors and pass to global error handler
            next(new ApiErrorHandler(error.message, 500));
        }
    };
};

export default validationMiddleware;
