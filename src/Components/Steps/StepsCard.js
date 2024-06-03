import React, { useState } from "react";

const StepsCard = ({ image, name, title, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`max-w-md mx-auto shadow-md rounded-lg overflow-hidden bg-[#ffffff] border border-[#6d6d6d] transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center p-6">
        <div className={`flex justify-center items-center rounded-full h-16 w-16 transition-colors duration-300 ${isHovered ? 'bg-[#8ba4fd]' : 'bg-[#cecece]'}`}>
          <img
            className="h-6 w-6 object-cover rounded-full"
            src={image}
            alt={name}
          />
        </div>
        <div className="ml-4 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center md:space-x-2 text-lg font-semibold text-center md:text-left">
            <span className="uppercase tracking-wide hover:underline hover:cursor-pointer">
              {name}
            </span>
            <h3 className="block leading-tight font-light hover:underline hover:cursor-pointer text-md">
              {title}
            </h3>
          </div>
          {isHovered && <div className="mt-2">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default StepsCard;
