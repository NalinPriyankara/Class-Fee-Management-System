import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImage from "../Images/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Toast notification functions
  const showSuccess = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login/logindata", {
        email,
        password,
      });
      localStorage.setItem("accessToken", response.data.token);
      if (response.status === 200) {
        showSuccess("Successfully Login");
        setMessage("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        const errorMsg = error.response.data.error || "Login failed";
        setMessage(errorMsg);
        showError(errorMsg);
      } else {
        setMessage("Server error");
        showError("Server error");
      }
    }
  };

  const handleSignUp = () => {
    navigate("/userReg");
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg p-10">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center pb-5">Login</h1>

        {message && (
          <p className="text-center text-sm text-red-600 mb-4">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="email"
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg bg-gray text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 font-bold text-white py-2 mt-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleSignUp}
          className="mt-3 text-white-600 text-sm hover:underline w-full text-center"
        >
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;