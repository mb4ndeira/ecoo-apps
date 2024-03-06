"use client";
import { useEffect, useState } from "react";

// import Step1 from "./components/Step1";
// import Step2 from "./components/Step2";
// import Step3 from "./components/Step3";
// import Step4 from "./components/Step4";
// import Step5 from "./components/Step5";

export default function Produtos() {
  // const storageStep =
  //   typeof window !== undefined
  //     ? parseInt(localStorage.getItem("offer-product-step") as string)
  //     : null;

  // const [currentStep, setCurrentStep] = useState(storageStep || 0);

  // function nextStep() {
  //   setCurrentStep((prevStep) => prevStep + 1);
  // }

  const formComponentes = [
    // {
    //   form: <Step1 goNextClick={nextStep} />,
    // },
    // {
    //   form: <Step2 goNextClick={nextStep} />,
    // },
    // {
    //   form: <Step3 goNextClick={nextStep} />,
    // },
    // {
    //   form: <Step4 goNextClick={nextStep} />,
    // },
    // {
    //   form: <Step5 />,
    // },
  ];

  return (
    <div className="w-full h-screen flex flex-col p-5 bg-background">
      {/* {formComponentes[currentStep].form} */}
    </div>
  );
}
