import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchData = () => {
    fetch(
      "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=c881e3f00464299b65d148a1a01b2868"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles)) // Assuming API response has an "articles" field
      .catch((error) => console.error("Error fetching news:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex w-screen justify-center">
      <div className="w-[1200px] h-fit p-10 max-lg:w-full max-lg:p-5">
        <div className="h-[60px] text-neutral-800 text-3xl font-semibold">
          Top Market News
        </div>
        {news.length ? (
          <div>
            <div className="flex gap-10 h-[520px] mt-5 ">
              <div className="w-[70%] max-lg:w-[100%] h-fit border rounded-xl">
                <div className="h-[350px]">
                  <img
                    src={news[0].image} // Dynamic image
                    alt={news[0].title}
                    className="h-full w-full object-cover border rounded-t-xl"
                  />
                </div>
                <div className="p-5 ">
                  <p className="font-bold text-xs bg-black text-white py-2 px-4 rounded-md w-fit">
                    Top News
                  </p>
                  <Link
                    to={news[0].url}
                    className="font-bold text-xl mt-3 hover:underline"
                  >
                    {news[0].title}
                  </Link>
                  <p className="text-[10px] font-medium mt-2">
                    Posted at : {new Date(news[0].publishedAt).toLocaleString()}
                  </p>
                  <a
                    href={news[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-xs text-blue-700 underline font-bold">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>

              <div className="w-[30%] max-lg:hidden gap-10 grid grid-rows-2">
                {news.slice(1, 3).map((item, index) => (
                  <div key={index} className="border h-full rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[60%] w-full object-cover rounded-t-xl"
                    />
                    <div className="p-3">
                      <h1 className="text-[8px] py-1 px-2 bg-black text-white rounded-md w-fit font-bold">
                        Market
                      </h1>
                      <h1 className="text-[10px] mt-2 font-semibold hover:underline">
                        {item.title}
                      </h1>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="text-[10px] text-blue-700 underline font-bold">
                          Learn More
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-fit mt-10">
              <h1 className="text-3xl font-medium text-gray-600">
                Popular News
              </h1>
              <div className="grid grid-col-1 mt-10">
                {news.slice(3, 10).map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex max-lg:flex-col border-2 h-[230px] max-lg:h-fit mb-4 rounded-xl"
                  >
                    <div className="w-[30%] max-lg:w-[100%]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover rounded-l-xl max-lg:rounded-l-none max-lg:rounded-t-xl"
                      />
                    </div>
                    <div className="w-[70%] max-lg:w-[100%] p-10 max-lg:p-5">
                      <p className="font-bold text-xs bg-black rounded-md text-white py-2 px-4 w-fit">
                        Popular
                      </p>
                      <Link
                        to={item.url}
                        className="mt-3 font-semibold hover:underline"
                      >
                        {item.title}
                      </Link>
                      <p className="text-[10px] font-medium mt-2">
                        Posted at :{" "}
                        {new Date(item.publishedAt).toLocaleString()}
                      </p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="text-xs mt-3 text-blue-700 underline font-bold">
                          Learn More
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center h-fit w-full">
            <div className="w-[1200px] flex justify-center items-center h-[400px]">
              <h1 className="text-3xl font-bold text-gray-400">Loading....</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
