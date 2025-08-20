// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 px-4">
      {/* MOBILE: bottom-aligned | DESKTOP: centered card */}
      <div className="w-full flex flex-col justify-end sm:justify-center ">
        <div className="w-full sm:max-w-md sm:bg-white sm:rounded-2xl sm:shadow-lg sm:p-6 sm:mx-auto">
          {/* Heading */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
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
    </div>
  );
};

export default Home;
