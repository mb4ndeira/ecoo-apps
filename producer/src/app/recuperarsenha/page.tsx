"use client";

import EsqueciSenhaStep1 from "./components/1/page";
import EsqueciSenhaStep2 from "./components/2/page";
import { useEffect, useState } from "react";

export default function EsqueciSenha() {
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const storedStep = localStorage.getItem('forgot-password-step')
    return storedStep ? JSON.parse(storedStep) : 0
  })
  
  useEffect(() => {
    localStorage.setItem('forgot-password-step', JSON.stringify(currentStep))
  }, [currentStep])

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  const backStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const steps = [
    {
      step: <EsqueciSenhaStep1 goNextClick={nextStep} />
    },
    {
      step: <EsqueciSenhaStep2 goBackClick={backStep} />
    }
  ]

  return (
    <div className="w-full h-screen p-3 pb-6 flex items-center flex-col">
      {steps[currentStep].step}
    </div>
  );
}
