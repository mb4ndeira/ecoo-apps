"use client";
import { useState } from "react";

import Button from "@shared/components/Button";
import { LuChevronLeft } from "react-icons/lu";

interface FormProps {
  goNextClick: () => void;
  goBackClick: () => void
}

export default function Step3({ goNextClick, goBackClick }: FormProps) {
  const savedOfferProductsDataString = localStorage.getItem('offer-products-data');
  const savedOfferProductsData = savedOfferProductsDataString ? JSON.parse(savedOfferProductsDataString) : null;

  const [describe, seDescribe] = useState(savedOfferProductsData.describe);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    seDescribe(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOfferProductData = {
      ...(savedOfferProductsData || {}), 
      describe: describe
    };

    localStorage.setItem('offer-products-data', JSON.stringify(newOfferProductData))

    goNextClick();
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-1/4 flex flex-col justify-center">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Faltou alguma <br /> coisa?
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Se existir alguma característica que <br />
          você deseja informar ao consumidor, <br />
          descreva aqui ou deixe em branco
        </span>
      </div>
      <div className="w-full h-[70%]">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col gap-3 mt-4 justify-between"
        >
          <div className="w-full h-full flex flex-col">
            <label className="font-inter text-sm text-primary">Descrição</label>
            <textarea value={describe} onChange={handleChange} className="text-slate-gray rounded-lg border-primary border-[1px] w-full h-2/5 p-3 resize-none text-sm" />
          </div>
          <div>
            <Button
              className="text-white border-0 p-2 bg-default"
              title="Continuar"
            />
          </div>
        </form>
      </div>
      <div className="w-full flex items-center h-[5%] mt-6">
        <LuChevronLeft className="w-[30px] h-[30px] text-default" />
          <Button
            title="Voltar"
            className="flex items-center gap-2 text-sm font-medium text-default w-auto"
            onClick={goBackClick}
          />
      </div>
    </div>
  );
}
