import React from "react";
import faqImg from "../../Assets/faq.png";

export default function Faq() {
  const steps = [
    {
      tag: "General",
      subTag: "",
      question: "I want to work part-time, is that possible",
      image: faqImg,
    },
    {
      tag: "",
      subTag: "",
      question: "How long are the average projects?",
      image: faqImg,
    },
    {
      tag: "",
      subTag: "",
      question: "How does the payment works?",
      image: faqImg,
    },
    {
      tag: "",
      subTag: "",
      question: "How much can I earn?",
      image: faqImg,
    },
    {
      tag: "General",
      subTag: "Joining Process",
      question: "I want to work part-time, is that possible",
      image: faqImg,
    },
    {
      tag: "",
      subTag: "",
      question: "How long are the average projects?",
      image: faqImg,
    },
    {
      tag: "",
      subTag: "",
      question: "How long are the average projects?",
      image: faqImg,
    },
    {
      tag: "",
      subTag: "",
      question: "How much can I earn?",
      image: faqImg,
    },
  ];

  return (
    <div className="bg-[#f3f3f3] min-h-screen flex flex-col p-10">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Frequently asked questions{" "}
      </h2>

      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-row justify-between border-b-2 border-t-2 border-gray-300 py-2 items-center hover:bg-[#e8e8e8] hover:cursor-pointer"
        >
          <div className="w-1/4 text-lg sm:text-md md:text-xl lg:text-2xl">
            {step?.tag}
          </div>
          <div className="w-1/4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {step?.subTag}
          </div>
          <div className="w-1/4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {step?.question}
          </div>
          <div className="w-1/4">
            <img
              src={step.image}
              alt="Icon"
              className=" transition-opacity duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
