"use client";
import { useState } from "react";

import Button from "@shared/components/Button";
import Input from "@shared/components/Input";
import { LuChevronLeft } from "react-icons/lu";
import Link from "next/link";

interface FormProps {
  goNextClick: () => void;
}

export default function Step1Quantity({ goNextClick }: FormProps) {
  const savedOfferProductsDataString = localStorage.getItem('offer-products-data');
  const savedOfferProductsData = savedOfferProductsDataString ? JSON.parse(savedOfferProductsDataString) : null;

  const [quantity, setquantity] = useState(savedOfferProductsData.quantity);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquantity(e.target.value);
    setError("");
  };

  const handleBackClick = () => {
    const newOfferProductData = {
      ...(savedOfferProductsData || {}), 
      weigth: "",
      quantity: "",
      price: ""
    };

    localStorage.setItem('offer-products-data', JSON.stringify(newOfferProductData))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!quantity) {
      setError("Você deve preencher os campos acima!");
      return;
    }

    const newOfferProductData = {
      ...(savedOfferProductsData || {}), 
      quantity: quantity,
      weight: ""
    };

    localStorage.setItem('offer-products-data', JSON.stringify(newOfferProductData))

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
        <div className="w-full h-full">
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
                    value={quantity}
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
              <Link onClick={handleBackClick} className="flex items-center gap-2 text-sm font-medium text-default w-auto" href={"/produtos/vender"}>
                Voltar
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
