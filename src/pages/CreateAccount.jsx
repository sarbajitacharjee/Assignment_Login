import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-top md:items-center bg-white">
      {/* Wrapper: Full screen on mobile, card on desktop */}
      <div className="w-full px-6 py-8 md:w-[400px] md:bg-white md:rounded-xl md:shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Create your</h2>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">PopX account</h2>

        <form className="space-y-5" autoComplete="off">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              required
              autoComplete="off"
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-400 rounded-lg outline-none focus:border-purple-600"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm font-semibold text-purple-600 bg-white">
              Full Name <span className="text-red-800 font-bold"> *</span>
            </span>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <input
              type="text"
              required
              autoComplete="off"
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-400 rounded-lg outline-none focus:border-purple-600"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm font-semibold text-purple-600 bg-white">
              Phone number <span className="text-red-800 font-bold"> *</span>
            </span>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              autoComplete="off"
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-400 rounded-lg outline-none focus:border-purple-600"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm font-semibold text-purple-600 bg-white">
              Email address <span className="text-red-800 font-bold"> *</span>
            </span>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              required
              autoComplete="off"
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-400 rounded-lg outline-none focus:border-purple-600"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm  font-semibold text-purple-600 bg-white">
              Password <span className="text-red-800 font-bold"> *</span>
            </span>
          </div>

          {/* Company Name */}
          <div className="relative">
            <input
              autoComplete="off"
              type="text"
              className="w-full px-3 pt-4 pb-2 border-2 border-gray-400 rounded-lg outline-none focus:border-purple-600"
            />
            <span className="absolute -top-2 left-3 px-1 text-sm font-semibold text-purple-600 bg-white">
              Company name
            </span>
          </div>

          {/* Radio */}
          <div className="mt-4">
            <p className="text-gray-700 mb-2 font-semibold">
              Are you an Agency?{" "}
              <span className="text-red-800 font-bold"> *</span>
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="accent-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="accent-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
