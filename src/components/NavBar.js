import React, { useState, useEffect, useRef } from "react";
import { TbHexagonLetterS } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Menu = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "About",
    path: "/",
  },
  {
    id: "3",
    name: "News",
    path: "/news",
  },
  {
    id: "4",
    name: "Stocks",
    path: "/stocks",
  },
];

const NavBar = () => {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();
  const [navbtn, setNavbtn] = useState(true);
  const menuRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home page after logout
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setNavbtn(true); // Close the menu
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-screen flex justify-center h-[60px]">
      <div className="w-[1200px] max-lg:w-full flex justify-between max-lg:justify-between items-center h-full">
        <Link to="/" className="flex w-[150px] items-center gap-2 pl-6">
          <TbHexagonLetterS className="text-xl" />
          <h1 className="text-base font-semibold text-gray-900">SmartStocks</h1>
        </Link>
        <div className="max-lg:hidden">
          <ul className="flex">
            {Menu.map((list) => (
              <Link
                key={list.id}
                className="text-xs font-normal hover:border-b-2 border-black cursor-pointer py-2 px-4"
                to={list.path}
              >
                {list.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="lg:hidden pr-6">
          <button onClick={() => setNavbtn(!navbtn)}>
            <IoMenu className="text-3xl" />
          </button>
          <div
            ref={menuRef}
            className={`flex flex-col absolute top-0 right-14 mt-12 w-[200px] h-fit bg-white border rounded-xl p-3 ${
              navbtn ? "hidden" : ""
            }`}
          >
            <ul className="flex flex-col">
              {Menu.map((list) => (
                <Link
                  key={list.id}
                  className="text-sm font-normal hover:scale-105 border-black cursor-pointer text-center py-4"
                  to={list.path}
                  onClick={() => setNavbtn(true)}
                >
                  {list.name}
                </Link>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              {user ? (
                <>
                  <Link
                    to="/predict"
                    className="text-[11px] font-semibold py-2 px-4 bg-gray-200 text-center rounded-lg"
                    onClick={() => setNavbtn(true)}
                  >
                    Predict Now
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-[11px] font-semibold py-2 px-4 bg-black text-white rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="text-[11px] font-semibold py-2 px-4 text-center bg-gray-200 rounded-lg"
                    onClick={() => setNavbtn(true)}
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="text-[11px] font-semibold py-2 px-4 text-center bg-black text-white rounded-lg"
                    onClick={() => setNavbtn(true)}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-3 max-lg:hidden">
          {user ? (
            <>
              <Link
                to="/predict"
                className="text-[11px] font-semibold py-2 px-4 bg-gray-200 rounded-lg"
              >
                Predict Now
              </Link>
              <button
                onClick={handleLogout}
                className="text-[11px] font-semibold py-2 px-4 bg-black text-white rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="text-[11px] font-semibold py-2 px-4 bg-gray-200 rounded-lg"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-[11px] font-semibold py-2 px-4 bg-black text-white rounded-lg"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
