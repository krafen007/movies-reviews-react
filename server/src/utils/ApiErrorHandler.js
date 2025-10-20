// Custom error class to handle API errors with status codes
class ApiErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export default ApiErrorHandler;
