import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import InputField from '../../components/InputField/InputField.jsx';
import Btn from '../../components/Btn/Btn.jsx';
import authService from '../../services/authService.js';
import ValidationErrorsList from '../../components/ValidationErrorsList/ValidationErrorsList.jsx';

function Login({ checkLogInState }) {

    const [errors, setErrors] = useState([]);              // Holds Joi validation errors
    const [apiError, setApiError] = useState('');          // API error message
    const [isCallingApi, setIsCallingApi] = useState(false); // Loading state for button
    const [user, setUser] = useState({ email: '', password: '' }); // Login form data

    const navigation = useNavigate();

    // Handle input change and reset validation errors
    const handleInputChange = (e) => {
        const userInfo = { ...user };
        userInfo[e.target.name] = e.target.value.trimEnd();
        setUser(userInfo);
        setErrors([]);
        setApiError('');
    };

    // Joi schema for form validation
    const validateLogInData = (data) => {
        const logInSchema = Joi.object({
            email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('[A-Za-z0-9].{3,}')),
        });

        return logInSchema.validate(data, { abortEarly: false });
    };

    // Handle form submission and API request
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        // Client-side validation
        const { error } = validateLogInData(user);
        if (error) {
            const validationMessages = error.details.map((err) => err.message);
            setErrors(validationMessages);
            return;
        }

        setIsCallingApi(true);
        setErrors([]);
        setApiError('');

        // Send login request to backend
        const responseData = await authService('http://localhost:3001/api/users/login', user);

        if (responseData.success === true) {
            // Successful login → save user data + navigate home
            localStorage.setItem('data', JSON.stringify(responseData.data));
            checkLogInState();
            navigation('/');
        } else {
            // Failed login → display server message
            setApiError(responseData.message);
        }

        setIsCallingApi(false);
    };

    return (
        <div className="container">
            <h2 className="my-4 mb-5">Log In</h2>

            {/* API error message */}
            {apiError ? <h3 className="alert alert-warning my-3">{apiError}</h3> : ''}

            {/* Login form */}
            <form onSubmit={handleSubmitForm}>
                <InputField id="email" label="Email" onChange={handleInputChange} />
                <InputField
                    id="password"
                    label="Password"
                    type="password"
                    onChange={handleInputChange}
                />
                <Btn value="Log In" isCallingApi={isCallingApi} />
            </form>

            {/* Validation errors */}
            {errors.length > 0 ? <ValidationErrorsList error={errors} /> : ''}
        </div>
    );
}

export default Login;
