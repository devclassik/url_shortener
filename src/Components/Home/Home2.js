import React, { useState } from "react";
import goImage from "../../Assets/p-go.png";
import hHome from "../../Assets/h-lines.png";
import l1 from "../../Assets/l1.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home2() {
  const [query, setQuery] = useState({ url: "" });
  const [shortUrl, setShortUrl] = useState(""); // State for short URL
  const [fullUrlQuery, setFullUrlQuery] = useState({ Url: "" });
  const [fullUrl, setFullUrl] = useState(""); // State for full URL
  const [submitting, setSubmitting] = useState(false);

  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const toastId = toast.loading("Please wait...");

    try {
      const response = await axios.post(`${apiUrl}/shorten`, query);
      if (response.status === 200) {
        toast.success("URL shortened successfully!");
        setShortUrl(response.data.short_url);
        setQuery({ url: "" });
      } else {
        throw new Error("Failed to shorten URL");
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
    } finally {
      toast.dismiss(toastId);
      setSubmitting(false);
    }
  };

  const handleShortUrlChange = (e) => {
    const { name, value } = e.target;
    setFullUrlQuery((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleFullUrlSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Fetching full URL...");

    try {
      const response = await axios.get(`${apiUrl}/url/${fullUrlQuery.Url}`,);
      if (response.status === 200) {
        toast.success("Full URL retrieved successfully!");
        // console.log('res',response.data.res );
        setFullUrl(response.data.res);
        setFullUrlQuery({ Url: "" });
      } else {
        throw new Error("Failed to retrieve full URL");
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-5xl pt-20 sm:pt-32 md:pt-40 pb-16 sm:pb-24 mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-black mb-6">
          Shortening long URLs
          <span className="inline-block">
            <img
              src={l1}
              alt="head"
              className="h-8 w-auto inline-block mx-2 sm:h-10 md:h-12 lg:h-14 hover:animate-bounce hover:cursor-pointer "
            />
          </span>
          has never been easier.
        </h1>
        <h2 className="text-xl sm:text-2xl w-[95%] m-auto md:text-3xl lg:text-4xl font-semibold text-gray-700 text-center mb-8 sm:mb-11">
          With our rigorous pre-vetting process, <br />
          worry not about finding the ideal URL ever again.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center mx-auto p-4">
          <div className="relative w-full sm:w-auto">
            <input
              className="search-input rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#202229] outline-none border border-gray-300 focus:outline-none px-4 py-2 w-full sm:w-auto"
              type="search"
              role="searchbox"
              name="url"
              placeholder="Enter long URL here"
              value={query.url}
              onChange={handleChange}
            />
          </div>
          <img
            src={goImage}
            className="h-14 mt-2 sm:mt-0 sm:-ml-0 cursor-pointer"
            alt="goButton"
            onClick={handleSubmit}
          />
        </div>
      </div>

      {shortUrl && (
        <div className="max-w-[20rem] sm:max-w-2xl pb-2 mx-auto bg-[#F8F8F8] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl text-center">
          <div className="flex flex-wrap justify-center py-2 -space-x-1">
            <button className="z-10 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-[10px] shadow-sm text-base font-medium text-black bg-[#C7F4C2]/75 hover:bg-[#C7F4C2]">
              URL
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 pb-10 pt-10">
            <div className="px-5 text-lg leading-1">
              <p className="text-[#202229] text-2xl font-bold">{shortUrl}</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl pt-10 pb-16 sm:pb-24 mx-auto">
        <h2 className="text-2xl sm:text-3xl w-[95%] m-auto md:text-3xl lg:text-4xl font-semibold text-gray-700 text-center mb-6">
          Retrieve Full URL
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center mx-auto p-4">
          <div className="relative w-full sm:w-auto">
            <input
              className="search-input rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#202229] outline-none border border-gray-300 focus:outline-none px-4 py-2 w-full sm:w-auto"
              type="search"
              role="searchbox"
              name="Url"
              placeholder="Paste the last 8 digit after ope.com/"
              value={fullUrlQuery.Url}
              onChange={handleShortUrlChange}
            />
          </div>
          <img
            src={goImage}
            className="h-14 mt-2 sm:mt-0 sm:-ml-0 cursor-pointer"
            alt="goButton"
            onClick={handleFullUrlSubmit}
          />
        </div>
        {fullUrl && (
          <div className="text-center mt-6">
            <p className="text-[#202229] text-2xl font-bold">Full URL: {fullUrl}</p>
          </div>
        )}
      </div>

      <div className="">
        <img
          src={hHome}
          alt="Product"
          className="h-50 w-full object-cover sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full"
        />
        <div className="space-y-4"></div>
      </div>
    </>
  );
}
