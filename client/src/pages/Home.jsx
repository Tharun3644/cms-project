import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
        Welcome to Your Site!
      </h1>
      <br />
      <br />
      <button
        type="button"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
