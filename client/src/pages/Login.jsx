import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
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
      setError('Please enter your username or email.');
      return false;
    }
    if (!formData.password) {
      setError('Please enter your password.');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Welcome, ${formData.username}!`);
      // TODO: Implement actual login logic
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 px-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg max-w-md w-full p-8 text-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
        {error && (
          <div
            role="alert"
            className="bg-red-600 bg-opacity-90 rounded-md p-3 mb-4 font-semibold"
          >
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
            aria-required="true"
            minLength={6}
            className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            aria-label="Login to your account"
            className="w-full py-3 bg-purple-700 hover:bg-purple-800 rounded-lg font-semibold shadow-md shadow-purple-700/60 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-white text-opacity-80">
          Don&apos;t have an account?{' '}
          <a href="#" tabIndex={0} className="underline hover:text-purple-200">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
