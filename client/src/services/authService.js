import axios from 'axios';

/**
 * Handle authentication-related API requests (login, register).
 *
 * @param {string} url - API endpoint for the authentication request.
 * @param {object} data - User input data to send in the request body.
 * @returns {Promise<object>} - Returns the response data or error message from the server.
 */
const authService = async (url, data) => {
    try {
        const response = await axios.post(`${url}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export default authService;
