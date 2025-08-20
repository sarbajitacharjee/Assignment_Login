import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: ""
  });

  // Check if all fields except company are filled
  const isFormValid =
    formData.fullName &&
    formData.phone &&
    formData.email &&
    formData.password &&
    formData.agency;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/dashboard"); // redirect on success
    }
  };

  return (
    <div className="min-h-screen flex items-top justify-top bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white  p-6 ">
        <h1 className="text-2xl font-bold text-gray-800">
          Create your <br /> PopX account
        </h1>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-300 rounded-lg outline-none focus:border-purple-500"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm text-purple-600 bg-white">
              Full Name *
            </span>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-300 rounded-lg outline-none focus:border-purple-500"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm text-purple-600 bg-white">
              Phone number *
            </span>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-300 rounded-lg outline-none focus:border-purple-500"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm text-purple-600 bg-white">
              Email address *
            </span>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-300 rounded-lg outline-none focus:border-purple-500"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm text-purple-600 bg-white">
              Password *
            </span>
          </div>

          {/* Company Name (Optional) */}
          <div className="relative">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-300 rounded-lg outline-none focus:border-purple-500"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm text-purple-600 bg-white">
              Company name
            </span>
          </div>

          {/* Agency Yes/No */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Are you an Agency? *
            </p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleChange}
                  required
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleChange}
                  required
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              isFormValid
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
