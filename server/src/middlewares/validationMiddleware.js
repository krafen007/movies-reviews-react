import ApiErrorHandler from '../utils/ApiErrorHandler.js';

const validationMiddleware = (schema) => {
    return (req, res, next) => {
        try {
            const { error } = schema.validate(req.body, { abortEarly: false });

            if (error) {
                const details = error.details.map((err) => {
                    return { field: err.path[0], message: err.message };
                });

                return res.status(400).json({
                    message: 'Validation error',
                    error: details,
                });
            }

            next();
        } catch (error) {
            next(new ApiErrorHandler(error.message, 5000));
        }
    };
};

export default validationMiddleware;
