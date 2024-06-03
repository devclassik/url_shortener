import React from "react";

const TeamCard = ({ title, members }) => {
  return (
    <div className="max-w-[20rem] sm:max-w-2xl pb-2 mx-auto bg-[#FFFFFF] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <div className="grid grid-cols-1 gap-4 pt-2">
        {/* Title */}
        <div className="flex justify-start pl-5">
          <p className="text-sm font-semibold text-[#202229]">{title}</p>
        </div>
        {/* Members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-4">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image inside a Circle */}
              <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden border-4 bg-[#F6F6F6] flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name of the Picture */}
              <div className="flex justify-center mt-2">
                <p className="text-sm md:text-base text-[#202229] pl-5">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
