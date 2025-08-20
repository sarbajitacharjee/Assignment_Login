// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-end min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-t-2xl shadow-md p-6 mx-auto">
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button className="w-full py-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition">
            Create Account
          </button>
          <button className="w-full py-3 bg-purple-100 text-purple-800 rounded-md font-medium hover:bg-purple-200 transition">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
