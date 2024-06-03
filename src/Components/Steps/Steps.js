import React from "react";
import media from "../../Assets/media.png";
import StepsCard from "./StepsCard";

export default function Steps() {
  const steps = [
    {
      image: media,
      name: "Step 1:",
      title: "Resume Screening",
      description:
        "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      image: media,
      name: "Step 2:",
      title: "Video Interview",
      description:
        "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      image: media,
      name: "Step 3:",
      title: "Technical Evaluation",
      description:
        "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      image: media,
      name: "Step 4:",
      title: "Application Review",
      description:
        "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      image: media,
      name: "Step 5:",
      title: "Let's get to work",
      description:
        "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
  ];

  return (
    <div className="w-full lg:w-3/6 min-h-screen flex flex-col items-center p-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          How we ensure you’re in good hands.
        </h2>
        <h3 className="text-lg font-medium">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </h3>
      </div>

      <div className="flex flex-col space-y-1">
        {steps.map((step, index) => (
          <div key={index}>
            <StepsCard image={step.image} name={step.name} title={step.title}>
              <p className="mt-2">{step.description}</p>
            </StepsCard>
          </div>
        ))}
      </div>
    </div>
  );
}
