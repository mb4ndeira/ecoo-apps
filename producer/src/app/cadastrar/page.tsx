"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { FormCadastrar1, ProgressBar1 } from "./components/Step1";
import { FormCadastrar2, ProgressBar2 } from "./components/Step2";
import { FormCadastrar4, ProgressBar4 } from "./components/Step4";
import FormCadastrar3 from "./components/Step3";

export default function Cadastrar() {
  const initialStep = parseInt(localStorage.getItem("step") ?? "0");
  const [currentStep, setCurrentStep] = useState(initialStep);

  useEffect(() => {
    localStorage.setItem("step", currentStep.toString());
  }, [currentStep]);

  function backStep() {
    setCurrentStep(currentStep - 1);
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  const formComponents = [
    {
      progress: <ProgressBar1 />,
      form: <FormCadastrar1 goNextClick={nextStep} />,
    },
    {
      progress: <ProgressBar2 />,
      form: <FormCadastrar2 goBackClick={backStep} goNextClick={nextStep} />,
    },
    {
      page: <FormCadastrar3 goNextClick={nextStep} />,
    },
    {
      progress: <ProgressBar4 />,
      form: <FormCadastrar4 goBackClick={backStep} />,
    },
  ];

  return (
    <div className="transition-opacity w-full h-screen flex items-center flex-col p-3 pb-8 bg-background">
      {currentStep === 0 || currentStep === 1 || currentStep === 3 ? (
        <>
          <div className="w-full h-1/4 flex items-center flex-col justify-center gap-4">
            <h1 className="text-3xl text-slate-gray font-medium">
              Crie sua conta
            </h1>
            <span className="text-sm text-slate-gray font-medium">
              Preencha seus dados abaixo ou <br />{" "}
              <Link className="underline" href={"/login"}>
                entre com uma conta existente
              </Link>
            </span>
          </div>
          <div className="w-full h-[8%] flex justify-center items-start mt-1">
            {formComponents[currentStep].progress}
          </div>
          <div className="w-full h-[67%] mt-3">
            {formComponents[currentStep].form}
          </div>
        </>
      ) : (
        formComponents[currentStep].page
      )}
    </div>
  );
}
