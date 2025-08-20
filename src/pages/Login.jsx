import React, { useState } from "react";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
     
      <div
        className="
          w-full min-h-screen sm:min-h-0 sm:w-full sm:max-w-md
          bg-white px-6 py-8
          sm:rounded-lg sm:shadow-lg
        "
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 leading-snug">
          Sign in to your <br /> PopX account
        </h1>
        <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Sapiente, praesentium!
        </p>

        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
              className="w-full px-4 pt-5 pb-2 border-2 border-gray-300 rounded-lg outline-none focus:border-purple-600"
            />
            <span className="absolute -top-2 left-4 px-1 text-sm font-semibold text-purple-600 bg-white">
              Email Address <span className="text-red-800 font-bold">*</span>
            </span>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="off"
              className="w-full px-4 pt-5 pb-2 border-2 border-gray-300 rounded-lg outline-none focus:border-purple-600"
            />
            <span className="absolute -top-2 left-4 px-1 text-sm font-semibold text-purple-600 bg-white">
              Password <span className="text-red-800 font-bold">*</span>
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${
              formData.email && formData.password
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!formData.email || !formData.password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
