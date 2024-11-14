import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(
        "https://smartstocksbackend.onrender.com/api/auth",
        data
      );
      localStorage.setItem("token", res.data);
      window.location = "/predict";
      console.log("Login SucessFul");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="w-full flex justify-center h-[600px]">
      <div className="w-[1200px] max-lg:w-full h-full flex justify-center items-center">
        <div className="w-[900px] max-lg:w-11/12 h-[450px] shadow-xl rounded-xl grid grid-cols-2 max-lg:grid-cols-1 border ">
          <div className="p-3 max-lg:hidden">
            <img
              src="https://img.freepik.com/premium-photo/3d-flat-icon-stock-market-dynamics-concept-as-abstract-bull-bear-silhouettes-with-white-backgrou_980716-70661.jpg"
              className="w-full h-full object-cover rounded-lg"
              alt="loginimg"
            />
          </div>
          <div>
            <div className="w-full flex justify-center flex-col items-center h-[60px] mt-10">
              <h1 className="text-lg font-bold ">User Login</h1>
              <p className="text-[11px] mt-2 font-semibold text-gray-500">
                Hey, Enter your Account details to login
              </p>
            </div>
            <div className="h-[250px] flex flex-col justify-center p-10   gap-2">
              <p className="text-xs text-neutral-600">Email</p>
              <input
                type="text"
                placeholder="Enter Email"
                className="px-4 py-2 text-sm border border-neutral-800 rounded-md"
                name="email"
                onChange={handleChange}
              />
              <p className="text-xs text-neutral-600">Password</p>
              <input
                type="password"
                placeholder="Enter Password"
                className="px-4 py-2 text-sm border border-neutral-800 rounded-md"
                name="password"
                onChange={handleChange}
              />
              {error && (
                <div className="text-xs text-red-600 font-normal">{error}</div>
              )}
              <button
                onClick={handleSubmit}
                className="mt-3 text-xs font-bold rounded-md bg-black text-white py-3"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center items-center text-xs">
              <h1>
                No Account ?
                <Link
                  to="/register"
                  className="text-blue-600 underline font-bold"
                >
                  {" "}
                  Register
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
