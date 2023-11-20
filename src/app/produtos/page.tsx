"use client";

import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

export default function Produtos(){
  const [currentStep, setCurrentStep] = useState(1)

  function backStep(){
    setCurrentStep(currentStep - 1)
  }

  function nextStep(){
    setCurrentStep(currentStep + 1)
  }

  const formComponentes = [
    {
      form: <Step1 goBackClick={backStep} />
    },
    {
      form: <Step2 goBackClick={backStep} />
    },
    {
      form: <Step3 />
    }
  ]

  return(
    <div className="w-full h-screen flex flex-col p-5">
      {formComponentes[currentStep].form}
    </div>
  )
}
