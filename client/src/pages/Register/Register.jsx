import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import authService from '../../services/authService.js';
import InputField from '../../components/InputField/InputField.jsx';
import ValidationErrorsList from '../../components/ValidationErrorsList/ValidationErrorsList.jsx';
import Btn from '../../components/Btn/Btn.jsx';

function Register() {
    // Form state and validation handlers
    const [errors, setErrors] = useState([]);
    const [apiError, setApiError] = useState('');
    const [isCallingApi, setIsCallingApi] = useState(false);

    // User registration form data
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const navigation = useNavigate();

    // Handle input field changes
    const handleInputChange = (e) => {
        const userInfo = { ...user };
        userInfo[e.target.name] = e.target.value;
        setUser(userInfo);
        setApiError('');
        setErrors([]);
    };

    // Validate form inputs using Joi schema
    const validateRegistrationData = (data) => {
        const registerSchema = Joi.object({
            firstName: Joi.string().alphanum().min(3).max(10).required(),
            lastName: Joi.string().alphanum().min(3).max(10).required(),
            email: Joi.string()
                .email({ tlds: { allow: ['com', 'net'] } })
                .required(),
            password: Joi.string()
                .pattern(new RegExp('^[A-Za-z0-9]{3,}$'))
                .required(),
        });

        return registerSchema.validate(data, { abortEarly: false });
    };

    // Handle form submission
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        // Run validation before sending API request
        const { error } = validateRegistrationData(user);
        if (error) {
            const validationMessages = error.details.map((err) => err.message);
            setErrors(validationMessages);
            return;
        }

        setIsCallingApi(true);
        setErrors([]);
        setApiError('');

        // Send registration request to backend
        const responseData = await authService('http://localhost:3001/api/users/register', user);

        if (responseData.success === false) {
            setApiError(responseData.message);
        } else {
            // Redirect to login page on successful registration
            navigation('/login');
        }

        setIsCallingApi(false);
    };

    return (
        <div className="container">
            <h2 className="my-4 mb-5">Register</h2>

            {/* Display API error if exists */}
            {apiError && <h3 className="my-3 alert alert-warning">{apiError}</h3>}

            {/* Registration form */}
            <form onSubmit={handleSubmitForm}>
                <InputField id="firstName" label="First Name" onChange={handleInputChange} />
                <InputField id="lastName" label="Last Name" onChange={handleInputChange} />
                <InputField id="email" label="Email" onChange={handleInputChange} />
                <InputField
                    id="password"
                    label="Password"
                    type="password"
                    onChange={handleInputChange}
                />
                <Btn value="Register" isCallingApi={isCallingApi} />
            </form>

            {/* Display validation errors if any */}
            {errors.length > 0 && <ValidationErrorsList error={errors} />}
        </div>
    );
}

export default Register;
