import React from "react";

const Card2 = ({ title, activities }) => {
  return (
    <div className="max-w-[20rem] sm:max-w-2xl pb-2 mx-auto ">
      <div className="grid grid-cols-1 gap-4 pt-2">
        <div className="flex justify-start">
          <p className="text-xl font-semibold text-[#202229]">{title}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-6 h-6 md:w-6 md:h-6 overflow-hidden border-2 flex items-center justify-center">
                <img
                  src={activity.icon}
                  alt={activity.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base text-[#202229]">{activity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card2;
