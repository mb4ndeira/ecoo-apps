'use client'

import Link from "next/link";
import Button from "../inicio/components/Button";
import { ChangeEvent, useRef, useState } from "react";

export default function Cadastrar3(){
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const [pin, setPin] = useState(["", "", "", ""]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (!value && index > 0) {
      const previousInputRef = inputRefs[index - 1].current;
      if (previousInputRef) {
        previousInputRef.focus();
      }
    }

    const nextInputRef = inputRefs[index + 1]?.current;
    if (value && nextInputRef) {
      nextInputRef.focus();
    }
  };

  return (
    <div className="transition-opacity w-full h-screen flex items-center flex-col p-3 pb-8">
      <div className="w-full flex items-center flex-col">
        <h1 className="text-3xl text-slate-gray font-medium mt-20 mb-4">Crie sua conta</h1>
        <span className="text-sm text-slate-gray font-medium">Preencha seus dados abaixo ou <br /> <Link className="underline" href={"/login"}>entre com uma conta existente</Link></span>
      </div>
      <div className="w-[90%] flex items-center justify-between mt-8">
        <div className="text-white bg-slate-gray w-[47px] h-[46px] p-3 text-2xl font-bold rounded-full flex items-center justify-center">
          1
        </div>
        <div className="w-[28%] h-[2px] bg-slate-gray -mx-10 relative"></div>
        <div className="w-[47px] h-[46px] p-3 text-2xl text-white bg-slate-gray font-bold rounded-full flex items-center justify-center">
          2
        </div>
        <div className="w-[28%] h-[2px] bg-slate-gray -mx-10"></div>
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold text-white bg-slate-gray rounded-full flex items-center justify-center">
          3
        </div>
      </div>
      <div className="w-full mt-16 h-full">
        <form className="w-full flex-col h-full">
          <div className="flex items-center flex-col h-1/2">
            <h1 className="text-2xl font-semibold mb-3">Verifique a sua conta</h1>
            <span className="text-primary text-base text-center">Insira o código PIN de 4 dígitos <br /> enviado para o seu celular *****4321</span>
            <div className="w-full flex justify-center mt-8 gap-4">
              {inputRefs.map((inputRef, index) => (
                <input
                  key={index}
                  className="w-14 h-14 text-center rounded-lg border-2 border-primary"
                  type="password"
                  ref={inputRef}
                  value={pin[index]}
                  onChange={(e) => handleChange(e, index)}
                  maxLength={1}
                />
              ))}
            </div>
          </div>
          <div className="w-full flex gap-2 h-1/2 items-end">
            <Link className="w-full" href={"/cadastrar-2"}>
              <Button className="font-semibold text-slate-gray border-slate-gray border-2 py-[10px] w-1/2" type="button" title="Voltar"/>
            </Link>
            <Button className="font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px] w-1/2" type="submit" title="Avançar"/>
          </div>
        </form>
      </div>
    </div>
  )
}