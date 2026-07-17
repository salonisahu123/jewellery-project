import React from "react";
import { X, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white shadow-2xl border border-[#B38B3E] rounded-2xl p-8">

        {/* Close Button */}
        <button
          onClick={() => navigate("/register")}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#B38B3E]"
        >
          <X size={24} />
        </button>


        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#B38B3E]">
            Luxe Jewellery
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome Back! Login to your account
          </p>
        </div>


        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-3 top-3 text-[#B38B3E]"
              size={20}
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#B38B3E]"
            />
          </div>


          {/* Password */}
          <div className="relative">
            <Lock
              className="absolute left-3 top-3 text-[#B38B3E]"
              size={20}
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#B38B3E]"
            />
          </div>


          {/* Forgot Password */}
          <div className="text-right">
            <button className="text-sm text-[#B38B3E] hover:underline">
              Forgot Password?
            </button>
          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#B38B3E] text-white font-semibold hover:bg-[#d79d32] transition duration-300 shadow-lg"
          >
            Login
          </button>

        </form>


        {/* Signup */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?

          <span onClick={()=>navigate("/register")} className="text-[#B38B3E] font-semibold cursor-pointer ml-1 hover:underline">
            Sign Up
          </span>

        </p>

      </div>

    </div>
  );
};

export default LoginModal;