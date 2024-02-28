"use client";
import { useState } from "react";

import Button from "@shared/components/Button";
import Input from "@shared/components/Input";

interface FormProps {
  goNextClick: () => void;
}

export default function Step1({ goNextClick }: FormProps) {
  const [quantity, setquantity] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquantity(e.target.value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!quantity) {
      setError("Você deve preencher os campos acima!");
      return;
    }

    goNextClick();
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[88%] flex flex-col items-center mt-12">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Qual a <br /> quantidade?
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Qual a quantidade do produto que <br />
          ostaria de colocar a venda no nosso <br /> centro de distribuição?
        </span>
        <div className="w-full h-full flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-col mt-4 justify-between"
          >
            <div className="w-full flex gap-2 flex-col">
              <div className="w-full flex gap-3">
                <div className="w-[65%]">
                  <Input
                    onChange={handleChange}
                    className="text-primary w-full text-sm"
                    type="text"
                    label="Quantidade"
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
