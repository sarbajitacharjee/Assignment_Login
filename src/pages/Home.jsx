import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-white px-4">
      <div className="w-full flex flex-col justify-end sm:justify-center mb-10">
        <div className="w-full sm:max-w-md bg-gray-50 sm:rounded-2xl sm:shadow-lg sm:p-6 sm:mx-auto">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Buttons with Router */}
          <div className="flex flex-col gap-3">
            <Link to="/create-account">
              <button className="w-full py-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition">
                Create Account
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full py-3 bg-purple-100 text-purple-800 rounded-md font-medium hover:bg-purple-200 transition">
                Already Registered? Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
