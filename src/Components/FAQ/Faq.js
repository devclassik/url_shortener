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
    <div className="bg-[#f3f3f3] min-h-screen flex flex-col p-6 sm:p-10">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
        Frequently asked questions
      </h2>

      <div className="w-full sm:w-11/12 md:w-4/5 mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between border-t-2 py-10 border-[#D6D6D6] items-center hover:bg-[#e8e8e8] hover:cursor-pointer group"
          >
            <div className="w-full md:w-1/4 text-xs sm:text-sm md:text-md lg:text-lg text-[#202229] md:border-r-2 border-[#D6D6D6] font-bold sm:px-4 md:py-0">
              {step?.tag}
            </div>
            <div className="w-full md:w-1/4 text-xs sm:text-sm md:text-md lg:text-lg text-[#202229] font-bold sm:px-4 md:py-0">
              {step?.subTag}
            </div>
            <div className="w-full md:w-1/4 text-xs sm:text-sm md:text-md lg:text-lg text-[#202229] sm:px-4 md:py-0">
              {step?.question}
            </div>
            <div className="w-full md:w-1/4 flex justify-center md:justify-end px-2 sm:px-4 py-2 md:py-0">
              <img
                src={step.image}
                alt="Icon"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
