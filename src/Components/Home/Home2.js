import React, { useEffect, useState } from "react";
import goImage from "../../Assets/p-go.png";
import hHome from "../../Assets/h-lines.png";
import l1 from "../../Assets/l1.png";

export default function Home2() {
  const [query, setQuery] = React.useState("");
  const searchRef = React.useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const onSearch = (e) => {
    const value = e.target.value;

    setQuery(value);
  };

  const isSearching = query?.length > 0;

  return (
    <>
      <div class="max-w-5xl pt-20 sm:pt-32 md:pt-40 pb-16 sm:pb-24 mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-black mb-6">
          Finding the right fit
          <span class="inline-block">
            <img
              src={l1}
              alt="head"
              className="h-8 w-auto inline-block mx-2 sm:h-10 md:h-12 lg:h-14 hover:animate-bounce hover:cursor-pointer "
            />
          </span>
          has never been easier.
        </h1>
        <h2 class="text-xl sm:text-2xl w-[95%] m-auto md:text-3xl lg:text-4xl font-semibold text-gray-700 text-center mb-8 sm:mb-11">
          With our rigorous pre-vetting process, you'll never have to <br />
          worry about finding the ideal candidate ever again.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center mx-auto p-4">
          <div className="relative w-full sm:w-auto">
            <input
              className="search-input rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#202229] outline-none border border-gray-300 focus:outline-none px-4 py-2 w-full sm:w-auto"
              type="search"
              title="Search"
              role="searchbox"
              autoComplete="off"
              spellCheck="false"
              aria-live="polite"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {!isFocused && (
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400">
                <span className="font-bold">Looking for</span>
                <span className="ml-1"> design |</span>
              </div>
            )}
          </div>
          <img
            src={goImage}
            className="h-14 mt-2 sm:mt-0 sm:-ml-0 cursor-pointer"
            alt="goButton"
          />
        </div>
      </div>

      <div className="max-w-[20rem] sm:max-w-2xl pb-2 mx-auto bg-[#F8F8F8] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div className="flex flex-wrap justify-center py-2 -space-x-1">
          <button className="z-10 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-[10px] shadow-sm text-base font-medium text-black bg-[#C7F4C2]/75 hover:bg-[#C7F4C2]">
            IT & Development
          </button>
          <button className="z-10 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-[10px] shadow-sm text-base font-medium text-black bg-[#D2D2D2]/75 hover:bg-[#D2D2D2]">
            Design and Create
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10 pt-10">
          <div className="px-5 text-sm leading-1">
            <p className="text-[#959595]">Python Developer</p>
            <p className="text-[#959595]">Shopify Developer</p>
            <p className="text-[#202229]">MERN Stack Developer</p>
            <p className="text-[#959595]">Full Stack Developer</p>
          </div>
          <div className="px-5 text-sm leading-1">
            <p className="text-[#959595]">Data Scientist </p>
            <p className="text-[#959595]">Front End Developer</p>
            <p className="text-[#959595]">Shopify Developer</p>
            <p className="text-[#959595]">Python Developer</p>
          </div>
          <div className="px-5 text-sm leading-1">
            <p className="text-[#959595]">Shopify Developer</p>
            <p className="text-[#959595]">Python Developer</p>
            <p className="text-[#959595]">Full Stack Developer</p>
            <p className="text-[#202229]">Explore More</p>
          </div>
        </div>
      </div>

      <div className="">
        <img
          src={hHome}
          alt="Product"
          className="h-50 w-full object-cover sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full"
        />
        <div class="space-y-4"></div>
      </div>
    </>
  );
}
