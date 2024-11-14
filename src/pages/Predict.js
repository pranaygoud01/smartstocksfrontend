import React, { useState } from "react";
import axios from "axios";

const Predict = () => {
  const [symbol, setSymbol] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        symbol,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="w-screen flex justify-center h-fit">
      <div className="w-[1200px] h-[500px] max-lg:h-fit max-lg:pt-10  max-lg:w-full p-10 max-lg:p-0 flex justify-center gap-3">
        <div className="w-10/12 max-lg:w-11/12 h-full  border grid grid-cols-2 max-lg:grid-cols-1 rounded-xl shadow-xl">
          <div className="flex flex-col items-center justify-center gap-5 max-lg:h-[320px]">
            <h2 className="text-2xl font-semibold text-gray-700">
              Stock Prediction
            </h2>
            <p className="text-xs font-bold text-gray-500">
              Enter stock symbol (e.g., AAPL)
            </p>
            <input
              type="text"
              placeholder="Enter stock symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              className="border-2 border-neutral-500 px-4 py-2  text-sm w-[350px] rounded-md max-lg:w-8/12"
            />
            <button
              onClick={handleSubmit}
              className="text-[11px] font-semibold py-2 px-4 bg-black rounded-md text-white"
            >
              Get Prediction
            </button>
            {prediction && (
              <div className="flex justify-center w-full">
                <p className=" text-sm font-bold text-gray-600 w-10/12 leading-10 text-center">
                  Predicted Stock Price for <br />
                  <span className="text-green-500 text-semibold max-lg:text-xl  text-2xl ">
                    {symbol}: ${prediction}{" "}
                  </span>
                </p>
              </div>
            )}
          </div>
          <div className="max-lg:h-[250px]">
            <img
              src="https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover rounded-r-xl max-lg:rounded-r-none max-lg:rounded-br-xl max-lg:rounded-bl-xl"
              alt="predictionimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;
