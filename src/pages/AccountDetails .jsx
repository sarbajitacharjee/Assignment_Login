import React from "react";
import { useLocation } from "react-router-dom";

const AccountDetails = () => {
  const location = useLocation();
  const { fullName, email } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col">
      {/* Header */}
      <div className="border-b px-6 bg-white py-4 md:px-8">
        <h2 className="text-gray-800 font-bold text-start md:text-center text-xl md:text-2xl">
          Account Settings
        </h2>
      </div>

      {/* Profile Section */}
      <div className="md:flex md:flex-col md:items-center p-6 md:px-12 flex-1 bg-blue-50">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-gray-900 font-semibold text-lg">
              {fullName || "Marry Doe"}
            </h3>
            <p className="text-sm text-gray-500">
              {email || "Marry@Gmail.Com"}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm text-gray-600 leading-relaxed max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium sit, aliquid architecto ipsa officiis veniam perspiciatis necessitatibus laboriosam?

        </p>
      </div>
    </div>
  );
};

export default AccountDetails;
