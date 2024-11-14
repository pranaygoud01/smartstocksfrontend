import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-fit flex justify-center">
      <div className="w-[1200px] max-lg:w-full h-fit">
        <div className="h-[550px] max-lg:h-[700px] w-full flex justify-center items-center flex-col">
          <p className="text-[10px] font-semibold py-2 px-5 rounded-full border-[1px] border-gray-200 mb-5">
            Invest with your family & friends!
          </p>
          <h1 className="text-3xl w-5/12 max-lg:w-9/12 max-lg:text-2xl text-center mb-5 ">
            Empowering Your Investments with Data-Driven Predictions
          </h1>
          <p className="text-[10px] w-5/12 max-lg:w-9/12 text-center ">
            Unlock actionable insights and stay ahead in the stock market with
            intelligent, AI-powered forecasts.
          </p>
          <div className="flex gap-4 mt-5">
            <Link
              to="/login"
              className="text-[11px]  font-semibold py-2 px-4 bg-gray-200 rounded-lg"
            >
              Start Predicting
            </Link>
            <Link
              className="text-[11px] font-semibold py-2 px-4 bg-black text-white rounded-lg"
              to="/news"
            >
              Explore News
            </Link>
          </div>
        </div>
        <div className="h-fit w-full ">
          <div className="flex justify-center max-lg:px-10 max-lg:text-center max-lg:text-2xl  items-center h-[80px] text-3xl">
            <h1>
              Successful investing is about managing risk, not avoiding it.
            </h1>
          </div>
        </div>
        <div className="h-fit  gap-10 p-20 max-lg:mt-10 max-lg:p-8 ">
          <div className="border-t border-black pt-5 pl-5 max-lg:gap-5 flex justify-between">
            <div>
              <h1 className="text-6xl font-bold ">01</h1>
            </div>
            <div className="w-[450px]">
              <h1 className="text-xl font-medium text-gray-700">
                Accurate Predictions
              </h1>
              <p className="text-xs font-extralight mt-1">
                Our algorithms analyze past trends and market movements to
                deliver insights you can trust.
              </p>
            </div>
          </div>
          <div className="border-t border-black pt-5 pl-5 flex max-lg:gap-5 justify-between mt-10">
            <div>
              <h1 className="text-6xl font-bold text-green-800">02</h1>
            </div>
            <div className="w-[450px]">
              <h1 className="text-xl font-medium text-gray-700">
                Secure Access
              </h1>
              <p className="text-xs font-extralight mt-1">
                To ensure data privacy and a personalized experience, only
                authenticated users can view stock predictions.
              </p>
            </div>
          </div>
          <div className="border-t border-black pt-5 pl-5 flex max-lg:gap-5 justify-between mt-10">
            <div>
              <h1 className="text-6xl font-bold text-red-600">03</h1>
            </div>
            <div className="w-[450px]">
              <h1 className="text-xl font-medium text-gray-700">
                User-Friendly Interface
              </h1>
              <p className="text-xs font-extralight mt-1">
                Navigate effortlessly through our platform, designed with you in
                mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
