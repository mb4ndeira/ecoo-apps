"use client";

import Button from "@/components/Button";
import { useEffect, useRef, useState } from "react";

interface FormProps {
  goBackClick: () => void;
  goNextClick: () => void;
}

function FormCadastrar3({ goBackClick, goNextClick }: FormProps) {
  const [pin, setPin] = useState<string[]>(new Array(4).fill(""));
  const inputRef = useRef<HTMLInputElement>(null);
  const [activePin, setActivePin] = useState<number>(0);
  let currentPinIndex: number = 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const newPin: string[] = [...pin];
    newPin[currentPinIndex] = value.substring(value.length - 1);

    if (!value) {
      setActivePin(currentPinIndex - 1);
    } else {
      setActivePin(currentPinIndex + 1);
    }

    setPin(newPin);
  };

  const handleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentPinIndex = index;
    if (key === "Backspace") {
      if (!pin[currentPinIndex] && currentPinIndex > 0) {
        setActivePin(currentPinIndex - 1);
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activePin]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = `${pin[0]}${pin[1]}${pin[2]}${pin[3]}`.toString();

    if (result.length < 4) {
      return console.log("Informe o PIN");
    }

    goNextClick();
    localStorage.removeItem("formData1");
    localStorage.removeItem("formData2");
    console.log(result);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="w-full flex-col h-full">
      <div className="flex items-center flex-col h-1/2">
        <h1 className="text-2xl text-[#060606] inter-font font-semibold mb-3">
          Verifique a sua conta
        </h1>
        <span className="inter-font text-primary text-base text-center">
          Insira o código PIN de 4 dígitos <br /> enviado para o seu celular
          *****4321
        </span>
        <div className="w-full flex justify-center mt-8 gap-4">
          {pin.map((_, index) => {
            return (
              <input
                ref={index === activePin ? inputRef : null}
                key={index}
                value={pin[index]}
                className="w-14 h-14 text-center rounded-lg border-2 border-primary"
                type="password"
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex gap-2 h-1/2 items-end">
        <Button
          onClick={goBackClick}
          className="inter-font font-semibold text-slate-gray border-slate-gray border-2 py-[10px] w-1/2"
          type="button"
          title="Voltar"
        />
        <Button
          className="inter-font font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px] w-1/2"
          type="submit"
          title="Avançar"
        />
      </div>
    </form>
  );
}

function ProgressBar3() {
  return (
    <div className="w-full flex justify-center absolute">
      <div className="w-[90%] flex justify-between items-center relative z-0">
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold border-2 bg-background text-french-gray z-10 border-french-gray rounded-full flex items-center justify-center">
          1
        </div>
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold border-2 bg-background text-french-gray z-10 border-french-gray rounded-full flex items-center justify-center">
          2
        </div>
        <div className="text-white bg-slate-gray w-[47px] h-[46px] p-3 text-2xl font-bold rounded-full flex items-center justify-center z-10">
          3
        </div>
        <div className="absolute top-1/2 bg-french-gray h-0.5 w-full"></div>
      </div>
    </div>
  );
}

export { FormCadastrar3, ProgressBar3 };
