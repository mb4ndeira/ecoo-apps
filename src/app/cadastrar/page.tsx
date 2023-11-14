'use client'

import { useState } from "react";
import { FormCadastrar1, ProgressBar1 } from "./components/Cadastrar1";
import { FormCadastrar2, ProgressBar2 } from "./components/Cadastrar2";
import { FormCadastrar3, ProgressBar3 } from "./components/Cadastrar3";
import Link from "next/link";
import FormCadastrar4 from "./components/Cadastrar4";

export default function Cadastrar(){
  const [currentStep, setCurrentStep] = useState(0)

  function backStep(){
    setCurrentStep(currentStep - 1)
  }

  function nextStep(){
    setCurrentStep(currentStep + 1)
  }

  const formComponents = [
    {
      progress: <ProgressBar1 />,
      form: <FormCadastrar1 goNextClick={nextStep} />
    },
    {
      progress: <ProgressBar2 />,
      form: <FormCadastrar2 goBackClick={backStep} goNextClick={nextStep}/>
    },
    {
      progress: <ProgressBar3 />,
      form: <FormCadastrar3 goNextClick={nextStep} goBackClick={backStep}/>
    },
    {
      page: <FormCadastrar4 />
    }
  ]

  return(
    <div className="transition-opacity w-full h-screen flex items-center flex-col p-3 pb-8">
      {currentStep === 0 || currentStep === 1 || currentStep === 2 ? (
        <>
          <div className="w-full flex items-center flex-col">
            <h1 className="text-3xl text-slate-gray font-medium mt-20 mb-4">Crie sua conta</h1>
            <span className="text-sm text-slate-gray font-medium">Preencha seus dados abaixo ou <br /> <Link className="underline" href={"/login"}>entre com uma conta existente</Link></span>
          </div>
          {formComponents[currentStep].progress}
          <div className="w-full mt-8 h-full">
            {formComponents[currentStep].form}
          </div>
        </>
      ) : (
        formComponents[currentStep].page
      )}
    </div>
  )
}