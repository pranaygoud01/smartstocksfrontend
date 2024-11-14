import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const UserRegister = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(
        "https://smartstocksbackend.onrender.com/api/users",
        data
      );

      navigate("/login");
      console.log(res.message);
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
      <div className="w-[1200px] h-full  max-lg:w-full flex justify-center items-center">
        <div className="w-[900px] max-lg:w-11/12 h-[450px] shadow-xl rounded-xl grid grid-cols-2 max-lg:grid-cols-1 border ">
          <div>
            <div className="w-full flex justify-center flex-col items-center h-[60px] mt-10">
              <h1 className="text-lg font-bold ">User SignUp</h1>
              <p className="text-[11px] mt-2 font-semibold text-gray-500">
                Hey, Enter your details to Register!!
              </p>
            </div>
            <div className="h-[300px] flex flex-col justify-center p-10   gap-2">
              <p className="text-xs text-neutral-600">username</p>
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
              <button
                className="mt-3 text-xs font-bold rounded-md bg-black text-white py-3"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
            <div className="flex justify-center items-center text-xs">
              <h1>
                Already have an Account ?{" "}
                <Link to="/login" className="text-blue-600 underline font-bold">
                  {" "}
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
    </div>
  );
};

export default UserRegister;
