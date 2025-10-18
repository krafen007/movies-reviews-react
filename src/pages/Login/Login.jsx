import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import InputField from '../../components/InputField/InputField.jsx';
import Btn from '../../components/Btn/Btn.jsx';
import authService from '../../services/authService.js';
import ValidationErrorsList from '../../components/ValidationErrorsList/ValidationErrorsList.jsx';

function Login() {
    const [errors, setErrors] = useState([]);
    const [apiError, setApiError] = useState('');
    const [isCallingApi, setIsCallingApi] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const navigation = useNavigate();

    const handleInputChange = (e) => {
        const userInfo = { ...user };
        userInfo[e.target.name] = e.target.value.trimEnd();
        setUser(userInfo);
        setErrors([]);
        setApiError('');
    };

    const validateLogInData = (data) => {
        const logInSchema = Joi.object({
            email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('[A-Za-z0-9].{3,}')),
        });

        return logInSchema.validate(data, { abortEarly: false });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const { error } = validateLogInData(user);
        if (error) {
            const validationMessages = error.details.map((err) => err.message);
            setErrors(validationMessages);
            return;
        }

        setIsCallingApi(true);
        setErrors([]);
        setApiError('');

        const responseData = await authService('http://localhost:3001/api/users/login', user);

        if (responseData.success === false) {
            setApiError(responseData.message);
        } else {
            navigation('/');
        }

        setIsCallingApi(false);
    };

    return (
        <div className="container">
            <h2 className="my-4 mb-5">Log In</h2>
            {apiError ? <h3 className="alert alert-warning my-3">{apiError}</h3> : ''}
            <form onSubmit={handleSubmitForm}>
                <InputField id="email" label="Email" onChange={handleInputChange} />
                <InputField
                    id="password"
                    label="Password"
                    type="password"
                    onChange={handleInputChange}
                />
                <Btn value="LogIn" isCallingApi={isCallingApi} />
            </form>
            {errors.length > 0 ? <ValidationErrorsList error={errors} /> : ''}
        </div>
    );
}

export default Login;
