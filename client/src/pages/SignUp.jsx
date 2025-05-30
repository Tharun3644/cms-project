import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

  const validate = () => {
    if (!formData.username.trim()) {
      setError('Username is required.');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Account created for ${formData.username}!`);
      // TODO: implement actual signup logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 px-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg max-w-md w-full p-8 text-gray-900">
        <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
        {error && (
          <div
            role="alert"
            className="bg-red-500 text-white rounded-md p-3 mb-4 font-semibold"
          >
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            required
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={6}
            required
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-md hover:bg-purple-700 transition-colors"
          >
            Create Account
          </button>
        </form>
        <p className="mt-6 text-center text-gray-700">
          Already have an account?{' '}
          <a href="#" className="text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
