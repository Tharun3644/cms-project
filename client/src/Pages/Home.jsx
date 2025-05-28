import React from "react";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Welcome to Our web Page
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </>
  );
}
