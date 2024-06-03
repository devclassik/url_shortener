import React from "react";
import Button from "../Button/Button";
import ri from "../../Assets/w-right-ic.png";
import li from "../../Assets/w-left-ic.png";
import ti from "../../Assets/tt.png";
import pp from "../../Assets/pp.png";
import grovehq from "../../Assets/groovehq.png";
import quote from "../../Assets/quote.png";

export default function Testimony() {
  const name = "Jason Makki";
  const title = "Engineer at GROOVE";
  const location = "San Francisco";

  return (
    <div className="relative bg-[#202229] min-h-screen flex flex-col md:flex-row clip-custom -mt-10">
      <div className="absolute top-0 right-0 px-12 py-8">
        <img
          src={quote}
          alt="Top Right Image"
          className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
        />
      </div>
      <div className="flex-1 p-24 md:p-10 flex flex-col justify-center sm:p-24">
        <div className="text-center sm:pt-24">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ">
            How it worked for Jason
            <span className="inline-block">
              <img
                src={ti}
                alt="head"
                className="h-8 w-auto inline-block mx-2 sm:h-10 md:h-12 lg:h-14"
              />
            </span>
            at
            <span className="inline-block">
              <img
                src={grovehq}
                alt="grove"
                className="h-8 w-auto inline-block mx-2 sm:h-10 md:h-12 lg:h-14"
              />
            </span>
          </h2>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-white text-lg font-medium">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since.
          </h3>
        </div>
        <div className="flex justify-center space-x-4">
          <Button size="50px" src={li} alt="previous button" margin="5px" />
          <Button size="50px" src={ri} alt="next button" margin="5px" />
        </div>
      </div>

      <div className="flex-1 p-5 md:p-10 flex flex-col justify-center">
        <div className="max-w-md mx-auto shadow-md rounded-lg hover:scale-105 overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={pp}
                alt={name}
              />
            </div>
            <div className="p-8 ">
              <div className="uppercase tracking-wide text-sm text-white font-semibold hover:underline hover:cursor-pointer">
                {title}
              </div>
              <h1 className="block mt-1 text-lg leading-tight font-medium text-white hover:underline hover:cursor-pointer">
                {name}
              </h1>
              <p className="mt-2 text-white hover:underline hover:cursor-pointer ">
                {location}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <h3 className="text-white pb-6 text-xl sm:text-2xl md:text-3xl lg:text-2xl mb-6">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since. Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </h3>
        </div>
      </div>
    </div>
  );
}
