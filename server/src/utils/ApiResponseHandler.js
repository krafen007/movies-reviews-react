// Utility class to standardize successful API responses
class ApiResponseHandler {
    constructor(statusCode, message, data = null) {
        this.success = true;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

export default ApiResponseHandler;
