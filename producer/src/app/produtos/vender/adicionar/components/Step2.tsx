"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { LuChevronLeft } from "react-icons/lu";
import { IoIosHelp } from "react-icons/io";
import { useState } from "react";

interface FormProps {
  goBackClick: () => void;
  goNextClick: () => void;
}

export default function Step2({ goBackClick, goNextClick }: FormProps) {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setError("");
  };

  const isValidDate = (inputDate: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(inputDate)) return false;

    const currentDate = new Date();
    const selectedDate = new Date(inputDate);

    return selectedDate > currentDate;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      setError("Você precisa informar uma data!");
      return;
    }

    if (!isValidDate(date)) {
      setError("Insira uma data valida!");
      return;
    }

    goNextClick();
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[88%] flex flex-col items-center mt-12">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Qual a validade <br /> do produto?
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Qual a expectativa de validade em <br /> que produto mantém boas
          <br /> condições de comercialização?
        </span>
        <div className="w-full h-full">
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-col gap-3 mt-4 justify-between"
          >
            <div className="w-full flex flex-col">
              <Input
                className="text-primary text-sm w-[170px]"
                type="date"
                label="Validade"
                maxLength={8}
                onChange={handleChange}
              />
              {error && (
                <span className="text-red-600 text-sm text-center mt-2">
                  {error}
                </span>
              )}

              <span className="text-default text-sm text-center font-medium mt-5">
                Está em dúvida? Confira a nossa <br />
                <span className="underline">Tabela de Referência</span>
              </span>
            </div>
            <div>
              <Button
                className="text-white border-0 p-2 bg-default"
                title="Continuar"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-[12%] flex items-end justify-between">
        <div className="w-full flex items-center">
          <LuChevronLeft className="w-[30px] h-[30px] text-default" />
          <Button
            title="Voltar"
            className="flex items-center gap-2 text-sm font-medium text-default"
            onClick={goBackClick}
          ></Button>
        </div>
        <div>
          <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
        </div>
      </div>
    </div>
  );
}
