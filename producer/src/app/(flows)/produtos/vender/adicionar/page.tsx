"use client";
import { useEffect, useState } from "react";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

export default function Produtos() {
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const storedStep = localStorage.getItem('offer-product-step');
    return storedStep ? JSON.parse(storedStep) : 0;
  });
  console.log(currentStep)

  useEffect(() => {
    localStorage.setItem('offer-product-step', JSON.stringify(currentStep));
  }, [currentStep])

  function nextStep() {
    setCurrentStep(prevStep => prevStep + 1);
    console.log(currentStep)
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
