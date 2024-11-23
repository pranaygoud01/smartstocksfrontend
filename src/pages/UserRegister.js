import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const UserRegister = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // State for success pop-up
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const { data: res } = await axios.post(
        "https://smartstocksbackend.onrender.com/api/users",
        data
      );
      setSuccess(true); // Show success pop-up
      setTimeout(() => {
        setSuccess(false);
        navigate("/login");
      }, 3000); // Redirect after 3 seconds
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full flex justify-center h-[600px]">
      <div className="w-[1200px] h-full max-lg:w-full flex justify-center items-center">
        <div className="w-[900px] max-lg:w-11/12 h-[450px] shadow-xl rounded-xl grid grid-cols-2 max-lg:grid-cols-1 border">
          <div>
            <div className="w-full flex justify-center flex-col items-center h-[60px] mt-10">
              <h1 className="text-lg font-bold">User SignUp</h1>
              <p className="text-[11px] mt-2 font-semibold text-gray-500">
                Hey, Enter your details to Register!!
              </p>
            </div>
            <div className="h-[300px] flex flex-col justify-center p-10 gap-2">
              <p className="text-xs text-neutral-600">Username</p>
              <input
                name="username"
                type="text"
                placeholder="Enter username"
                className="px-4 py-2 text-sm border border-neutral-800 rounded-md"
                value={data.username}
                onChange={handleChange}
              />
              <p className="text-xs text-neutral-600">Email</p>
              <input
                name="email"
                type="text"
                placeholder="Enter Email"
                className="px-4 py-2 text-sm border border-neutral-800 rounded-md"
                value={data.email}
                onChange={handleChange}
              />
              <p className="text-xs text-neutral-600">Password</p>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="px-4 py-2 text-sm border border-neutral-800 rounded-md"
                value={data.password}
                onChange={handleChange}
              />
              {error && (
                <div className="text-xs text-red-600 font-medium">{error}</div>
              )}
              <motion.button
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                onClick={handleSubmit}
                className={`mt-3 text-xs font-bold rounded-md py-3 ${
                  loading ? "bg-neutral-900" : "bg-black"
                } text-white flex justify-center items-center`}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-4 h-4 border-2 border-t-transparent border-white rounded-full"
                  ></motion.div>
                ) : (
                  "Register"
                )}
              </motion.button>
            </div>
            <div className="flex justify-center items-center text-xs">
              <h1>
                Already have an Account?{" "}
                <Link to="/login" className="text-blue-600 underline font-bold">
                  Login
                </Link>
              </h1>
            </div>
          </div>
          <div className="p-3">
            <img
              src="https://img.freepik.com/premium-photo/3d-flat-icon-stock-market-dynamics-concept-as-abstract-bull-bear-silhouettes-with-white-backgrou_980716-70645.jpg?w=360"
              className="w-full h-full object-cover rounded-lg max-lg:hidden"
              alt="loginimg"
            />
          </div>
        </div>
      </div>

      {/* Success Pop-up */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg"
          >
            Registration Successful! Redirecting to login...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserRegister;
