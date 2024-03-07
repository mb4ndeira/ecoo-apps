"use client";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Image, { ImageLoader } from "next/image";

import { animalProducts, meats, products, productsWithVariety } from "../data";

const GROUPS = [
  "vegetais",
  "frutas",
  "cereais",
  "carnes",
  "origem animal",
  "todos",
];

const FilterButtons = ({
  selectedGroup,
  handleSelectGroup,
}: {
  selectedGroup: (typeof GROUPS)[number];
  handleSelectGroup: (group: (typeof GROUPS)[number]) => void;
}) => {
  return (
    <div className="flex flex-wrap justify-center mt-2.5 gap-y-1.5 gap-x-2">
      {GROUPS.map((group, index) => (
        <button
          key={index}
          onClick={() => handleSelectGroup(group)}
          className={`${
            selectedGroup === group
              ? "flex items-center h-[22px] px-2 bg-outer-space text-xs text-white font-semibold  rounded-[0.25rem]  "
              : "flex items-center h-[22px] px-2 bg-battleship-gray text-xs text-white font-semibold rounded-[0.25rem] "
          } `}
        >
          {group}
          {selectedGroup === group && <HiX className="ml-1" />}
        </button>
      ))}
    </div>
  );
};

const imageLoader: ImageLoader = ({ src, quality }) => {
  return `https://res.cloudinary.com/dwm7zdljf/image/upload/v1706539060/products-images/${quality}x${quality}_${src}`;
};

export function Products() {
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState("todos");

  const filteredProducts =
    selectedGroup === "todos"
      ? products
      : products.filter((product) => product.group === selectedGroup);

  const handleFilter = (group: string) => {
    setSelectedGroup((prevGroup) => (prevGroup === group ? "todos" : group));
  };

  const handleSelectProduct = (id: string, name: string) => {
    const dataOnStorage = JSON.parse(
      localStorage.getItem("offer-products-data") as string
    );

    localStorage.setItem(
      "offer-products-data",
      JSON.stringify({
        ...dataOnStorage,
        name: name,
        id: id,
      })
    );

    let path;
    switch (true) {
      case productsWithVariety.includes(id):
        path = "vender/variedade?id=" + id;
        break;
      case meats.includes(id):
        path = "vender/variedade/comercializacao?id=" + id;
        break;
      case animalProducts.includes(id):
        path = "quantidade?id=" + id;
        break;
      default:
        path = "vender/variedade/cultivo?id=" + id;
    }

    router.push(path);
  };

  return (
    <div>
      <FilterButtons
        selectedGroup={selectedGroup}
        handleSelectGroup={handleFilter}
      />
      <div className="grid grid-cols-2 justify-items-start gap-3 w-full max-h-screen mt-4 pr-4 overflow-y-scroll">
        {filteredProducts.map((product, index) => {
          return (
            <button
              className="flex flex-col items-center rounded-2xl w-full h-[160px] p-2.5 bg-white"
              key={index}
              onClick={() => handleSelectProduct(product.id, product.name)}
            >
              <div className="relative w-full min-w-[130px] h-[100px] rounded-[10px]">
                <Image
                  className="rounded-[10px]"
                  loader={imageLoader}
                  src={product.image}
                  alt={`${product.name.toLocaleLowerCase()}.jpg`}
                  quality={256}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="pt-2.5 text-base leading-[22px] tracking-tight text-slate-gray">
                {product.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
