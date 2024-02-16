"use client";
import { useState } from "react";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import { redirect } from "next/navigation";

export default function Produtos() {
  const session = sessionStorage.getItem("isLogged")

  if(!session){
    redirect('/inicio')
  }

  const [currentStep, setCurrentStep] = useState(0);

  function backStep() {
    setCurrentStep(currentStep - 1);
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  const formComponentes = [
    {
      form: <Step1 goBackClick={backStep} goNextClick={nextStep} />,
    },
    {
      form: <Step2 goBackClick={backStep} goNextClick={nextStep} />,
    },
    {
      form: <Step3 goBackClick={backStep} goNextClick={nextStep} />,
    },
    {
      form: <Step4 goBackClick={backStep} goNextClick={nextStep} />,
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
