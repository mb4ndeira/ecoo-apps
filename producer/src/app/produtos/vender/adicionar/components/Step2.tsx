"use client";
import { useState } from "react";

import Button from "@shared/components/Button";
import Input from "@shared/components/Input";
import { LuChevronLeft } from "react-icons/lu";

interface FormProps {
  goNextClick: () => void;
  goBackClick: () => void
}

export default function Step2({ goNextClick, goBackClick }: FormProps) {
  const savedOfferProductsDataString = localStorage.getItem('offer-products-data');
  const savedOfferProductsData = savedOfferProductsDataString ? JSON.parse(savedOfferProductsDataString) : null;

  const [amount, setAmount] = useState(savedOfferProductsData.price);
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

    const newOfferProductData = {
      ...(savedOfferProductsData || {}), 
      price: amount
    };

    localStorage.setItem('offer-products-data', JSON.stringify(newOfferProductData))

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
                <div className="w-full">
                  <Input
                    onChange={handleChange}
                    className="text-primary w-full text-sm"
                    type="text"
                    value={amount}
                    label="Preço"
                  />
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
          <div className="flex items-center mt-2">
            <LuChevronLeft className="w-[30px] h-[30px] text-default" />
              <Button
                title="Voltar"
                className="flex items-center gap-2 text-sm font-medium text-default w-auto"
                onClick={goBackClick}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
