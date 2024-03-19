"use client";

import Step2 from "./components/Step2";
import Step1 from "./components/Step1";
import { useState } from "react";

export default function Meus() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const components = [
    <Step1 goNextClick={nextStep} key={0} />,
    <Step2 goBackClick={backStep} key={1} />,
  ];

  return (
    <>{currentStep === 0 ? components[currentStep] : components[currentStep]}</>
  );
}
