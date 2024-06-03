import React from "react";
import rbut from "../../Assets/r-but.png";
import Button from "../Button/Button";

export default function JourneyCard({ bg, steps }) {
  const bgStyle = {
    backgroundColor: bg,
  };

  return (
    <div
      className=" flex flex-col md:flex-row clip-custom-sm p-10"
      style={bgStyle}
    >
      {/* Left Section */}
      <div className="flex-1 flex flex-row justify-center items-center space-y-6">
        {/* First Row */}
        <div className=" mb-6 pr-4">
          <img className="object-cover" src={steps.limage} alt="number" />
        </div>
        {/* Second Row */}
        <div className="">
          <h2 className="text-[#000] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {steps.title}
          </h2>
          <h3 className="text-[#000] text-lg font-medium mb-6">
            {steps.description}
          </h3>
          <div className="flex items-center">
            <Button size="50px" src={rbut} alt="button" margin="0px" />
            <span className="ml-4 text-black font-medium">{steps.btext}</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex-col justify-center items-center mt-10 md:mt-0 hidden sm:flex">
        <div className="w-full max-w-3xl">
          <img
            className="object-cover w-full h-auto"
            src={steps.rimage}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
