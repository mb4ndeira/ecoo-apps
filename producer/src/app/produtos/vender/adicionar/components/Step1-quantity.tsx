"use client";
import { useState } from "react";

import Button from "@shared/components/Button";
import Input from "@shared/components/Input";

interface FormProps {
  goNextClick: () => void;
}

export default function Step1Quantity({ goNextClick }: FormProps) {
  const [quantity, setquantity] = useState("");
  const [error, setError] = useState("");

  const savedOfferProductsDataString = localStorage.getItem(
    "offer-products-data"
  );
  const savedOfferProductsData = savedOfferProductsDataString
    ? JSON.parse(savedOfferProductsDataString)
    : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || parseInt(value) >= 1) {
      setquantity(value);
      setError("");
    } else {
      setError("A quantidade mínima permitida é 1.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!quantity) {
      setError("Você deve preencher os campos acima!");
      return;
    }

    const newOfferProductData = {
      ...(savedOfferProductsData || {}),
      quantity: quantity,
      weight: "",
    };

    localStorage.setItem(
      "offer-products-data",
      JSON.stringify(newOfferProductData)
    );

    goNextClick();
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[88%] flex flex-col items-center mt-12">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Quantas <br /> unidades?
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Quantas unidade do produto que <br />
          gostaria de colocar a venda no nosso <br /> centro de distribuição?
        </span>
        <div className="w-full h-full flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-col mt-4 justify-between"
          >
            <div className="w-full flex gap-2 flex-col">
              <div className="w-full flex gap-3">
                <div className="w-full">
                  <Input
                    onChange={handleChange}
                    className="text-primary w-full text-sm"
                    type="number"
                    label="Unidades"
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
        </div>
      </div>
    </div>
  );
}
