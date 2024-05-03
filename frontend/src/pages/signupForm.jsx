// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';
import SignupFormContent from '../components/SignupFormContent';

function SignupForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', formData);
            if (response.status === 201) {
                alert('User signed up successfully');
                setFormData({ name: '', email: '', password: '' });
            } else {
                alert('Failed to sign up');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Failed to sign up');
        }
    };

    return (
        <SignupFormContent
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

export default SignupForm;
