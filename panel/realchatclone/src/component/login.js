import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen 
            bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366]">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#25D366] mb-6">  Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-[#25D366] transition 
              duration-300 ease-in-out transform hover:scale-105"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-[#25D366] transition 
              duration-300 ease-in-out transform hover:scale-105"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg 
            hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#128C7E] 
            transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <span
              className="text-[#25D366] cursor-pointer hover:underline"
              onClick={() => navigate('/register')}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
