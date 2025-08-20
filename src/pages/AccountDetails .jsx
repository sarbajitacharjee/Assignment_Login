import React from "react";
import { useLocation } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

const AccountDetails = () => {
  const location = useLocation();
  const { fullName, email } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col">
      {/* Header */}
      <div className="border-b px-6 bg-white py-4 md:px-8">
        <h2 className="text-gray-800 font-bold text-start md:text-center text-xl md:text-3xl">
          Account Settings
        </h2>
      </div>

      {/* Profile Section */}
      <div className="md:flex md:flex-col md:items-center p-6 md:px-12 flex-1 bg-gray-100">
        <div className="relative flex items-center gap-4">
          {/* Profile Image with added Camera Icon no js for now  */}
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover border-2 border-white shadow-md"
            />
            {/* Camera Icon Overlay */}
            <div className="absolute bottom-0 right-0 bg-purple-700 p-1.5 rounded-full shadow-md cursor-pointer">
              <FaCamera className="text-white  text-sm" />
            </div>
          </div>

          {/* User Info */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg">
              {fullName || "Marry Doe"}
            </h3>
            <p className="text-sm text-gray-500">
              {email || "Marry@Gmail.Com"}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm text-gray-600 leading-relaxed max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores laudantium sit, aliquid architecto ipsa officiis veniam
          perspiciatis necessitatibus laboriosam?
        </p>
      </div>
    </div>
  );
};

export default AccountDetails;
