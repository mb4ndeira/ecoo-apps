"use client";
import { useState } from "react";
import { redirect } from "next/navigation";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

export default function Produtos() {
  const [currentStep, setCurrentStep] = useState(0);

  function backStep() {
    setCurrentStep(currentStep - 1);
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  const formComponentes = [
    {
      form: <Step1 goNextClick={nextStep} />,
    },
    {
      form: <Step2 goNextClick={nextStep} />,
    },
    {
      form: <Step3 goNextClick={nextStep} />,
    },
    {
      form: <Step4 goNextClick={nextStep} />,
    },
    {
      form: <Step5 />,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col p-5 bg-background">
      {formComponentes[currentStep].form}
    </div>
  );
}
