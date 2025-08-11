import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../constants/token";

export default function AdminLogin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkUser = import.meta.env.VITE_APP_USER_ID;
  const checkPassword = import.meta.env.VITE_APP_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User ID:", userId);
    console.log("Password:", password);
    alert(`Logging in as: ${userId}`);
    if (userId == checkUser && password == checkPassword) {
      setToken(userId, password);
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-[url('/images/bg.png')]">
      <div className="bg-[#1a1a1a] shadow-lg rounded-md p-8 w-full max-w-sm border border-gray-700">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-white hover:text-gray-300 transition"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Admin Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* User ID */}
          <div>
            <label
              htmlFor="userId"
              className="block text-white font-medium mb-1"
            >
              User ID
            </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full border border-gray-600 bg-[#0d0d0d] text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-white font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-600 bg-[#0d0d0d] text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
