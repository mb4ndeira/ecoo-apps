"use client";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";

const products = [
  { id: "001", name: "Tomate", group: "vegetais" },
  { id: "002", name: "Batata", group: "vegetais" },
  { id: "003", name: "Alface", group: "vegetais" },
  { id: "004", name: "Maçã", group: "frutas" },
  { id: "005", name: "Repolho", group: "vegetais" },
  { id: "006", name: "Amendoim", group: "cereais" },
  { id: "007", name: "Ovo", group: "origem animal" },
  { id: "008", name: "Peixe", group: "carnes" },
];

export function Products() {
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState("todos");

  const handleFilterClick = (group: string) => {
    setSelectedGroup((prevGroup) => (prevGroup === group ? "todos" : group));
  };

  const handleClick = (id: string) => {
    const path = "venderproduto/escolhervariedade?id=" + id;
    router.push(path);
  };

  const filteredProducts =
    selectedGroup === "todos"
      ? products
      : products.filter((product) => product.group === selectedGroup);

  return (
    <div>
      <div className="flex flex-wrap mt-2 justify-between gap-y-1 gap-x-2">
        <button
          onClick={() => handleFilterClick("vegetais")}
          className={`${
            selectedGroup === "vegetais"
              ? " bg-[#3E5055] text-white font-semibold px-1 rounded-[0.25rem] flex"
              : "bg-[#979797] text-white font-semibold px-1 rounded-[0.25rem]"
          } `}
        >
          vegetais
          {selectedGroup == "vegetais" && <HiX className="mt-1 ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("frutas")}
          className={`${
            selectedGroup === "frutas"
              ? " bg-[#3E5055] text-white font-semibold px-1 rounded-[0.25rem] flex"
              : "bg-[#979797] text-white font-semibold px-1 rounded-[0.25rem]"
          } `}
        >
          frutas
          {selectedGroup == "frutas" && <HiX className="mt-1 ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("cereais")}
          className={`${
            selectedGroup === "cereais"
              ? " bg-[#3E5055] text-white font-semibold px-1 rounded-[0.25rem] flex"
              : "bg-[#979797] text-white font-semibold px-1 rounded-[0.25rem]"
          } `}
        >
          cereais
          {selectedGroup == "cereais" && <HiX className="mt-1 ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("carnes")}
          className={`${
            selectedGroup === "carnes"
              ? " bg-[#3E5055] text-white font-semibold px-1 rounded-[0.25rem] flex"
              : "bg-[#979797] text-white font-semibold px-1 rounded-[0.25rem]"
          } `}
        >
          carnes
          {selectedGroup == "carnes" && <HiX className="mt-1 ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("origem animal")}
          className={`${
            selectedGroup === "origem animal"
              ? " bg-[#3E5055] text-white font-semibold px-1 rounded-[0.25rem] flex"
              : "bg-[#979797] text-white font-semibold px-1 rounded-[0.25rem]"
          } `}
        >
          origem animal
          {selectedGroup == "origem animal" && <HiX className="mt-1 ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("todos")}
          className={`${
            selectedGroup === "todos"
              ? " bg-[#3E5055] text-white font-semibold px-1 rounded-[0.25rem] flex"
              : "bg-[#979797] text-white font-semibold px-1 rounded-[0.25rem]"
          } `}
        >
          todos os produtos
          {selectedGroup == "todos" && <HiX className="mt-1 ml-1" />}
        </button>
      </div>
      <div className="mt-5 w-full max-h-[350px] md:max-h-[550px] overflow-y-scroll gap-x-1 sm:gap-x-3 gap-y-5 grid grid-cols-2 sm:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <button
            key={index}
            className="min-h-[160px] w-11/12 bg-white rounded-2xl mx-auto flex flex-col"
            onClick={() => handleClick(product.id)}
          >
            <div className="bg-rain-forest h-[100px] w-10/12 mx-auto mt-[10px] rounded-[10px]"></div>
            <span className="m-auto text-[#2F4A4D]">{product.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
