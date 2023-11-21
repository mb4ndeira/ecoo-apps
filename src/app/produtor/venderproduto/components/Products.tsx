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
  { id: "009", name: "Abóbora", group: "vegetais" },
  { id: "010", name: "Abobrinha", group: "vegetais" },
  { id: "011", name: "Acelga", group: "vegetais" },
  { id: "012", name: "Agrião", group: "vegetais" },
  { id: "013", name: "Aipim", group: "vegetais" },
  { id: "014", name: "Alcachofra", group: "vegetais" },
  { id: "015", name: "Alecrim", group: "vegetais" },
  { id: "016", name: "Alho", group: "vegetais" },
  { id: "017", name: "Berinjela", group: "vegetais" },
  { id: "018", name: "Beterraba", group: "vegetais" },
  { id: "019", name: "Brócolis", group: "vegetais" },
  { id: "020", name: "Cebola", group: "vegetais" },
  { id: "021", name: "Cebolinha", group: "vegetais" },
  { id: "022", name: "Cenoura", group: "vegetais" },
  { id: "023", name: "Chuchu", group: "vegetais" },
  { id: "024", name: "Couve", group: "vegetais" },
  { id: "025", name: "Couve-Flor", group: "vegetais" },
  { id: "026", name: "Erva-Doce", group: "vegetais" },
  { id: "027", name: "Espinafre", group: "vegetais" },
  { id: "028", name: "Gengibre", group: "vegetais" },
  { id: "029", name: "Hortelã", group: "vegetais" },
  { id: "030", name: "Inhame", group: "vegetais" },
  { id: "031", name: "Louro", group: "vegetais" },
  { id: "032", name: "Manjericão", group: "vegetais" },
  { id: "033", name: "Mostarda", group: "vegetais" },
  { id: "034", name: "Nabo", group: "vegetais" },
  { id: "035", name: "Palmito", group: "vegetais" },
  { id: "036", name: "Pepino", group: "vegetais" },
  { id: "037", name: "Pimenta", group: "vegetais" },
  { id: "038", name: "Pimentão", group: "vegetais" },
  { id: "039", name: "Quiabo", group: "vegetais" },
  { id: "040", name: "Rabanete", group: "vegetais" },
  { id: "041", name: "Rúcula", group: "vegetais" },
  { id: "042", name: "Salsa", group: "vegetais" },
  { id: "043", name: "Salsão", group: "vegetais" },
  { id: "044", name: "Tomilho", group: "vegetais" },
  { id: "045", name: "Abacate", group: "frutas" },
  { id: "046", name: "Abacaxi", group: "frutas" },
  { id: "047", name: "Acerola", group: "frutas" },
  { id: "048", name: "Ameixa", group: "frutas" },
  { id: "049", name: "Amora", group: "frutas" },
  { id: "050", name: "Araçá", group: "frutas" },
  { id: "051", name: "Banana", group: "frutas" },
  { id: "052", name: "Bergamota", group: "frutas" },
  { id: "053", name: "Butiá", group: "frutas" },
  { id: "054", name: "Caqui", group: "frutas" },
  { id: "055", name: "Carambola", group: "frutas" },
  { id: "056", name: "Cereja", group: "frutas" },
  { id: "057", name: "Figo", group: "frutas" },
  { id: "058", name: "Framboesa", group: "frutas" },
  { id: "059", name: "Goiaba", group: "frutas" },
  { id: "060", name: "Laranja", group: "frutas" },
  { id: "061", name: "Limão", group: "frutas" },
  { id: "062", name: "Mamão", group: "frutas" },
  { id: "063", name: "Manga", group: "frutas" },
  { id: "064", name: "Maracujá", group: "frutas" },
  { id: "065", name: "Melancia", group: "frutas" },
  { id: "066", name: "Melão", group: "frutas" },
  { id: "067", name: "Morango", group: "frutas" },
  { id: "068", name: "Pera", group: "frutas" },
  { id: "069", name: "Uva", group: "frutas" },
  { id: "070", name: "Arroz", group: "cereais" },
  { id: "071", name: "Ervilha", group: "cereais" },
  { id: "072", name: "Favas", group: "cereais" },
  { id: "073", name: "Feijão", group: "cereais" },
  { id: "074", name: "Grão de bico", group: "cereais" },
  { id: "075", name: "Lentilha", group: "cereais" },
  { id: "076", name: "Milho", group: "cereais" },
  { id: "077", name: "Queijo Colonial", group: "origem animal" },
  { id: "078", name: "Ricota", group: "origem animal" },
  { id: "079", name: "Leite", group: "origem animal" },
  { id: "080", name: "Mel", group: "origem animal" },
  { id: "081", name: "Galinha", group: "carnes" },
  { id: "082", name: "Ovelha", group: "carnes" },
  { id: "083", name: "Boi", group: "carnes" },
  { id: "084", name: "Batata doce", group: "vegetais" },
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

const carnes = ["081", "082", "083"];

export function Products() {
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState("todos");

  const handleFilterClick = (group: string) => {
    setSelectedGroup((prevGroup) => (prevGroup === group ? "todos" : group));
  };

  const handleClick = (id: string) => {
    if (withVarietyProducts.includes(id)) {
      const path = "venderproduto/escolhervariedade?id=" + id;
      router.push(path);
    } else if (carnes.includes(id)) {
      const path = "quantidade?id=" + id;
      router.push(path);
    } else {
      const path = "venderproduto/escolhervariedade/mododecultivo?id=" + id;
      router.push(path);
    }
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
