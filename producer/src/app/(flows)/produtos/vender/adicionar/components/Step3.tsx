"use client";
import { useState } from "react";

import Button from "@shared/components/Button";
import Input from "@shared/components/Input";

interface FormProps {
  goNextClick: () => void;
}

export default function Step3({ goNextClick }: FormProps) {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/[^0-9]/g, ""));

    if (!isNaN(value)) {
      const formattedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value / 100);

      setAmount(formattedValue);
    } else {
      setAmount("");
    }
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount) {
      setError("Você deve preencher o campo acima!");
      return;
    }

    goNextClick();
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[87%] flex flex-col items-center mt-12">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Qual o preço do <br /> produto?
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Qual o preço que o produto será <br />
          vendido? Qual a unidade de venda?
        </span>
        <div className="w-full h-full">
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-col gap-3 mt-4 justify-between"
          >
            <div className="w-full flex gap-2 flex-col">
              <div className="w-full flex gap-3">
                <div className="w-[65%]">
                  <Input
                    onChange={handleChange}
                    className="text-primary w-full text-sm"
                    type="text"
                    value={amount}
                    label="Preço"
                  />
                </div>
                <div className="flex flex-col w-[35%]">
                  <label className="text-sm text-primary">Unidade</label>
                  <select className="border border-primary rounded-lg mt-2 p-[9.5px]">
                    <option>kg</option>
                  </select>
                </div>
              </div>
              {error && (
                <span className="text-red-600 text-sm text-center">
                  {error}
                </span>
              )}
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
    </div>
  );
}
