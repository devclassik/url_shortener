import React from "react";
import q from "../../Assets/1.png";
import w from "../../Assets/2.png";
import e from "../../Assets/3.png";
import r from "../../Assets/4.png";
import t from "../../Assets/5.png";
import y from "../../Assets/6.png";
import a from "../../Assets/7.png";
import s from "../../Assets/8.png";
import d from "../../Assets/9.png";
import f from "../../Assets/10.png";
import g from "../../Assets/11.png";
import h from "../../Assets/12.png";
import c1 from "../../Assets/c1.png";
import c2 from "../../Assets/c2.png";
import c3 from "../../Assets/c3.png";
import rbut from "../../Assets/r-but.png";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";
import Button from "../Button/Button";

export default function Talent() {
  const teamMembers = [
    { image: q, name: "Shopify Developer" },
    { image: w, name: "Magento Developer" },
    { image: e, name: "Data Scientist" },
    { image: r, name: "Webflow Developer" },
    { image: t, name: "Dot Net Developer" },
    { image: y, name: "" },
  ];
  const teamMembers2 = [
    { image: a, name: "" },
    { image: s, name: "UX Designer" },
    { image: d, name: "Graphics Designer" },
    { image: f, name: "Illustration Artist" },
    { image: g, name: "Unreal Engine" },
    { image: h, name: "Cinema 4D" },
  ];

  const activities = [
    { name: "989 Skills", icon: c1 },
    { name: "45 Sub-Categories", icon: c2 },
    { name: "1011 Profiles", icon: c3 },
  ];

  return (
    <section className="text-gray-600 bg-[#EDEFFF] body-font pb-10 clip-custom">
      <div className="max-w-5xl pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb- mx-auto px-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-black mb-6">
          Your one-stop marketplace for finding the talent your business needs.
        </h1>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="flex-1 mb-8 md:mb-0 md:mr-4">
            <Card2
              title="Find Dev and IT professionals to scale your business."
              activities={activities}
            />
          </div>
          <div className="flex-1">
            <Card title="IT & Development" members={teamMembers} />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pt-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="flex-1 mb-8 md:mb-0 md:mr-4">
            <Card2
              title="Explore Creative individuals with a keen eye for detail."
              activities={activities}
            />
          </div>
          <div className="flex-1">
            <Card title="Design & Creative" members={teamMembers2} />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pt-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
          <div className="flex-1 mb-8 md:mb-0 md:mr-4 flex flex-row items-center justify-center md:justify-start">
            <Button size="50px" src={rbut} alt="button" margin="0px" />
            <span className="ml-4 text-black font-medium">Explore More</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg">
              <span className="font-medium text-black">30 more</span> to explore
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
