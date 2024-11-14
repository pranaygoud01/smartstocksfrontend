import React, { useEffect, useState } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

const Stocks = () => {
  const [stocksData, setStocksData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const symbols = ["AAPL", "MSFT", "IBM", "GOOGL", "META", "TSLA", "NVDA"];
    const api_key = "568d874ce1a04da18a497cbc234f6325";

    const logoDomains = {
      AAPL: "apple.com",
      MSFT: "microsoft.com",
      IBM: "ibm.com",
      GOOGL: "google.com",
      META: "meta.com",
      TSLA: "tesla.com",
      NVDA: "nvidia.com",
    };

    const fetchData = async () => {
      try {
        const symbolsString = symbols.join(",");
        const response = await axios.get(
          `https://api.twelvedata.com/time_series?symbol=${symbolsString}&interval=1min&apikey=${api_key}`
        );

        const data = response.data;

        const stocks = symbols.map((symbol) => {
          const stockData = data[symbol];
          return {
            name: symbol,
            price: stockData?.values ? stockData.values[0].close : "N/A",
            time: stockData?.values ? stockData.values[0].datetime : "N/A",
            currency: stockData?.meta ? stockData.meta.currency : "USD",
            timezone: stockData?.meta
              ? stockData.meta.exchange_timezone
              : "N/A",
            logo: `https://logo.clearbit.com/${logoDomains[symbol]}`,
          };
        });

        setStocksData(stocks);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen flex justify-center h-fit">
      <div className="w-[1200px] max-lg:w-full h-fit p-10 max-lg:p-5">
        <div className="mb-10">
          <h1 className="text-neutral-800 text-3xl font-semibold">
            Top Companies stock prices
          </h1>
        </div>
        {loading ? (
          <div className="grid grid-cols-3 max-lg:grid-cols-2  max-lg:gap-4 gap-10 cursor-pointer ">
            {stocksData.map((stock, index) => (
              <div
                key={index}
                className="h-[200px] w-full rounded-xl border hover:bg-neutral-50 p-6 max-lg:p-4 shadow-sm"
              >
                <div className="flex gap-3 max-lg:gap-2 items-center">
                  <img
                    src={stock.logo}
                    className="h-[40px] w-[40px] object-contain rounded-full p-1"
                    alt={stock.name}
                  />
                  <h1 className="font-semibold">{stock.name}</h1>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="font-normal max-lg:text-xs">
                    Current Price:{" "}
                    <span className="text-green-700 max-lg:text-xs">
                      {stock.price}
                    </span>
                  </p>
                  <p className="text-xs">Time: {stock.time}</p>
                  <div className="flex justify-between max-lg:flex-col max-lg:gap-3 mt-5 max-lg:mt-2">
                    <div className="flex gap-1">
                      <MdCurrencyExchange className="text-yellow-600" />
                      <p className="text-xs font-semibold">{stock.currency}</p>
                    </div>
                    <div className="flex gap-1">
                      <CiLocationOn className="text-blue-500" />
                      <p className="text-xs font-semibold">{stock.timezone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[400px] ">
            <h1 className="font-bold text-3xl text-gray-400">Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stocks;
