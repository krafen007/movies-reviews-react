import { useState } from 'react';
import authService from '../../services/authService.js';
import Joi from 'joi';
import InputField from '../../components/InputField/InputField.jsx';
import ValidationErrorsList from '../../components/ValidationErrorsList/ValidationErrorsList.jsx';
import Btn from '../../components/Btn/Btn.jsx';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [errors, setErrors] = useState([]);
    const [apiError, setApiError] = useState('');
    const [isCallingApi, setIsCallingApi] = useState(false);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const navigation = useNavigate();

    const handleInputChange = (e) => {
        const userInfo = { ...user };
        userInfo[e.target.name] = e.target.value;
        setUser(userInfo);
        setApiError('');
        setErrors([]);
    };

    const validateRegistrationData = (data) => {
        const registerSchema = Joi.object({
            firstName: Joi.string().alphanum().min(3).max(10).required(),
            lastName: Joi.string().alphanum().min(3).max(10).required(),
            email: Joi.string()
                .email({ tlds: { allow: ['com', 'net'] } })
                .required(),
            password: Joi.string().pattern(new RegExp('^[A-Za-z0-9]{3,}$')).required(),
        });

        return registerSchema.validate(data, { abortEarly: false });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const { error } = validateRegistrationData(user);
        if (error) {
            const validationMessages = error.details.map((err) => err.message);
            setErrors(validationMessages);
            return;
        }

        setIsCallingApi(true);
        setErrors([]);
        setApiError('');

        const responseData = await authService('http://localhost:3001/api/users/register', user);

        if (responseData.success === false) {
            setApiError(responseData.message);
        } else {
            // Success handling (navigate, show toast, etc.)
            navigation('/login');
        }

        setIsCallingApi(false);
    };

    return (
        <div className="container">
            <h2 className="my-4 mb-5">Register</h2>
            {apiError ? <h3 className="my-3 alert alert-warning">{apiError}</h3> : ''}
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

            {errors.length > 0 ? <ValidationErrorsList error={errors} /> : ''}
        </div>
    );
}

export default Register;
