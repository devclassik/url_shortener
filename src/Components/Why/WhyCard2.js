import React from "react";
import rbut from "../../Assets/r-but.png";
import Button from "../Button/Button";

export default function WhyCard2({ bg, steps, hyphenColor }) {
  const bgStyle = {
    backgroundColor: bg,
  };

  const hyphenStyle = {
    backgroundColor: hyphenColor,
    width: "12px",
    height: "4px",
    borderRadius: "10px",
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };

  return (
    <div className="flex flex-col md:flex-row p-10 rounded-md shadow-sm hover:scale-105 transition-transform duration-300" style={bgStyle}>
      {/* Left Section */}
      <div className="flex-1 flex flex-row justify-center items-center space-y-6">
        <div>
          <h2 className="text-[#000] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
            {steps.title}
          </h2>
          <ul className="mb-6 list-none space-y-2">
            <li className="relative pl-6">
              <span style={hyphenStyle}></span>
              {steps.text1}
            </li>
            <li className="relative pl-6">
              <span style={hyphenStyle}></span>
              {steps.text2}
            </li>
            <li className="relative pl-6">
              <span style={hyphenStyle}></span>
              {steps.text3}
            </li>
          </ul>
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
            className="object-cover w-full h-full"
            src={steps.image}
            alt="image"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
}
