"use client";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const products = [
  {
    id: "001",
    name: "Tomate",
    group: "vegetais",
    image: "/produtos/tomate.jpg",
  },
  {
    id: "002",
    name: "Batata",
    group: "vegetais",
    image: "/produtos/batata.jpg",
  },
  {
    id: "003",
    name: "Alface",
    group: "vegetais",
    image: "/produtos/alface.jpg",
  },
  { id: "004", name: "Maçã", group: "frutas", image: "" },
  { id: "005", name: "Repolho", group: "vegetais", image: "" },
  { id: "006", name: "Amendoim", group: "cereais", image: "" },
  { id: "007", name: "Ovo", group: "origem animal", image: "" },
  { id: "008", name: "Peixe", group: "carnes", image: "" },
  { id: "009", name: "Abóbora", group: "vegetais", image: "" },
  { id: "010", name: "Abobrinha", group: "vegetais", image: "" },
  { id: "011", name: "Acelga", group: "vegetais", image: "" },
  { id: "012", name: "Agrião", group: "vegetais", image: "" },
  { id: "013", name: "Aipim", group: "vegetais", image: "" },
  { id: "014", name: "Alcachofra", group: "vegetais", image: "" },
  { id: "015", name: "Alecrim", group: "vegetais", image: "" },
  { id: "016", name: "Alho", group: "vegetais", image: "" },
  { id: "017", name: "Berinjela", group: "vegetais", image: "" },
  { id: "018", name: "Beterraba", group: "vegetais", image: "" },
  { id: "019", name: "Brócolis", group: "vegetais", image: "" },
  {
    id: "020",
    name: "Cebola",
    group: "vegetais",
    image: "/produtos/cebola.jpg",
  },
  { id: "021", name: "Cebolinha", group: "vegetais", image: "" },
  { id: "022", name: "Cenoura", group: "vegetais", image: "" },
  { id: "023", name: "Chuchu", group: "vegetais", image: "" },
  { id: "024", name: "Couve", group: "vegetais", image: "" },
  { id: "025", name: "Couve-Flor", group: "vegetais", image: "" },
  { id: "026", name: "Erva-Doce", group: "vegetais", image: "" },
  { id: "027", name: "Espinafre", group: "vegetais", image: "" },
  { id: "028", name: "Gengibre", group: "vegetais", image: "" },
  { id: "029", name: "Hortelã", group: "vegetais", image: "" },
  { id: "030", name: "Inhame", group: "vegetais", image: "" },
  { id: "031", name: "Louro", group: "vegetais", image: "" },
  { id: "032", name: "Manjericão", group: "vegetais", image: "" },
  { id: "033", name: "Mostarda", group: "vegetais", image: "" },
  { id: "034", name: "Nabo", group: "vegetais", image: "" },
  { id: "035", name: "Palmito", group: "vegetais", image: "" },
  { id: "036", name: "Pepino", group: "vegetais", image: "" },
  { id: "037", name: "Pimenta", group: "vegetais", image: "" },
  { id: "038", name: "Pimentão", group: "vegetais", image: "" },
  { id: "039", name: "Quiabo", group: "vegetais", image: "" },
  { id: "040", name: "Rabanete", group: "vegetais", image: "" },
  { id: "041", name: "Rúcula", group: "vegetais", image: "" },
  { id: "042", name: "Salsa", group: "vegetais", image: "" },
  { id: "043", name: "Salsão", group: "vegetais", image: "" },
  { id: "044", name: "Tomilho", group: "vegetais", image: "" },
  { id: "045", name: "Abacate", group: "frutas", image: "" },
  { id: "046", name: "Abacaxi", group: "frutas", image: "" },
  { id: "047", name: "Acerola", group: "frutas", image: "" },
  { id: "048", name: "Ameixa", group: "frutas", image: "" },
  { id: "049", name: "Amora", group: "frutas", image: "" },
  { id: "050", name: "Araçá", group: "frutas", image: "" },
  { id: "051", name: "Banana", group: "frutas", image: "" },
  { id: "052", name: "Bergamota", group: "frutas", image: "" },
  { id: "053", name: "Butiá", group: "frutas", image: "" },
  { id: "054", name: "Caqui", group: "frutas", image: "" },
  { id: "055", name: "Carambola", group: "frutas", image: "" },
  { id: "056", name: "Cereja", group: "frutas", image: "" },
  { id: "057", name: "Figo", group: "frutas", image: "" },
  { id: "058", name: "Framboesa", group: "frutas", image: "" },
  { id: "059", name: "Goiaba", group: "frutas", image: "" },
  { id: "060", name: "Laranja", group: "frutas", image: "" },
  { id: "061", name: "Limão", group: "frutas", image: "" },
  { id: "062", name: "Mamão", group: "frutas", image: "" },
  { id: "063", name: "Manga", group: "frutas", image: "" },
  { id: "064", name: "Maracujá", group: "frutas", image: "" },
  { id: "065", name: "Melancia", group: "frutas", image: "" },
  { id: "066", name: "Melão", group: "frutas", image: "" },
  { id: "067", name: "Morango", group: "frutas", image: "" },
  { id: "068", name: "Pera", group: "frutas", image: "" },
  { id: "069", name: "Uva", group: "frutas", image: "" },
  { id: "070", name: "Arroz", group: "cereais", image: "" },
  { id: "071", name: "Ervilha", group: "cereais", image: "" },
  { id: "072", name: "Favas", group: "cereais", image: "" },
  { id: "073", name: "Feijão", group: "cereais", image: "" },
  { id: "074", name: "Grão de bico", group: "cereais", image: "" },
  { id: "075", name: "Lentilha", group: "cereais", image: "" },
  { id: "076", name: "Milho", group: "cereais", image: "" },
  { id: "077", name: "Queijo Colonial", group: "origem animal", image: "" },
  { id: "078", name: "Ricota", group: "origem animal", image: "" },
  { id: "079", name: "Leite", group: "origem animal", image: "" },
  { id: "080", name: "Mel", group: "origem animal", image: "" },
  { id: "081", name: "Galinha", group: "carnes", image: "" },
  { id: "082", name: "Ovelha", group: "carnes", image: "" },
  { id: "083", name: "Boi", group: "carnes", image: "" },
  { id: "084", name: "Batata doce", group: "vegetais", image: "" },
];

const withVarietyProducts = [
  "001",
  "002",
  "009",
  "010",
  "003",
  "016",
  "017",
  "020",
  "024",
  "037",
  "038",
  "051",
  "060",
  "061",
  "004",
  "062",
  "064",
  "066",
  "070",
  "071",
  "073",
  "007",
  "008",
];

const origemanimal = ["077", "078", "079", "080"];
const carnes = ["081", "082", "083"];

export function Products() {
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState("todos");

  const handleFilterClick = (group: string) => {
    setSelectedGroup((prevGroup) => (prevGroup === group ? "todos" : group));
  };

  const handleClick = (id: string) => {
    if (withVarietyProducts.includes(id)) {
      const path = "vender/variedade?id=" + id;
      router.push(path);
    } else if (carnes.includes(id)) {
      const path = "vender/variedade/comercializacao?id=" + id;
      router.push(path);
    } else if (origemanimal.includes(id)) {
      const path = "quantidade?id=" + id;
      router.push(path);
    } else {
      const path = "vender/variedade/cultivo?id=" + id;
      router.push(path);
    }
  };

  const filteredProducts =
    selectedGroup === "todos"
      ? products
      : products.filter((product) => product.group === selectedGroup);

  return (
    <div>
      <div className="flex flex-wrap mt-2 gap-y-1 gap-x-2">
        <button
          onClick={() => handleFilterClick("vegetais")}
          className={`${
            selectedGroup === "vegetais"
              ? " bg-[#3E5055] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
              : "bg-[#979797] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
          } `}
        >
          vegetais
          {selectedGroup == "vegetais" && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("frutas")}
          className={`${
            selectedGroup === "frutas"
              ? " bg-[#3E5055] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
              : "bg-[#979797] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
          } `}
        >
          frutas
          {selectedGroup == "frutas" && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("cereais")}
          className={`${
            selectedGroup === "cereais"
              ? " bg-[#3E5055] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
              : "bg-[#979797] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
          } `}
        >
          cereais
          {selectedGroup == "cereais" && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("carnes")}
          className={`${
            selectedGroup === "carnes"
              ? " bg-[#3E5055] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
              : "bg-[#979797] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
          } `}
        >
          carnes
          {selectedGroup == "carnes" && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("origem animal")}
          className={`${
            selectedGroup === "origem animal"
              ? " bg-[#3E5055] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
              : "bg-[#979797] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
          } `}
        >
          origem animal
          {selectedGroup == "origem animal" && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleFilterClick("todos")}
          className={`${
            selectedGroup === "todos"
              ? " bg-[#3E5055] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
              : "bg-[#979797] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
          } `}
        >
          todos os produtos
          {selectedGroup == "todos" && <HiX className="ml-1" />}
        </button>
      </div>
      <div className="mt-5 w-full max-h-[350px] md:max-h-[550px] overflow-y-scroll gap-x-1 sm:gap-x-3 gap-y-5 grid grid-cols-2 sm:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <button
            key={index}
            className="min-h-[160px] w-11/12 bg-white rounded-2xl mx-auto flex flex-col"
            onClick={() => handleClick(product.id)}
          >
            <div className="bg-rain-forest h-[100px] w-10/12 mx-auto mt-[10px] rounded-[10px] relative">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-[10px]"
              />
            </div>
            <span className="m-auto text-slate-gray text-base">
              {product.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
