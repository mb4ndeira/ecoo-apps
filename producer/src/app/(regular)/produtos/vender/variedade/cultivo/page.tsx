"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const convencionalProducts = [
  {
    id: "001",
    image: "/cultivo/cultivo_convencional.jpg",
    name: "Convencional",
    description: "Utiliza fertilizantes químicos e pesticidas sintéticos.",
  },
  {
    id: "002",
    image: "/cultivo/cultivo_convencional.jpg",
    name: "Orgânico",
    description:
      "Baseia-se em práticas naturais, sem o uso de produtos químicos",
  },
  {
    id: "003",
    image: "/cultivo/cultivo_convencional.jpg",
    name: "Em transição agroecológica",
    description:
      "Fase de transição para métodos sustentáveis, reduzindo a dependência de produtos químicos.",
  },
  {
    id: "004",
    image: "/cultivo/cultivo_convencional.jpg",
    name: "Hidroponia",
    description:
      "Crescimento de plantas em água, sem solo, fornecendo nutrientes diretamente às raízes.",
  },
];

export default function Home() {
  const router = useRouter();

  // const offerDataString = localStorage.getItem("offer-products-data");
  // const offerData = offerDataString ? JSON.parse(offerDataString) : null;

  const handleClick = (name: string) => {
    // const newOfferData = {
    //   ...offerData,
    //   cultivo: name,
    // };

    // localStorage.setItem("offer-products-data", JSON.stringify(newOfferData));
    router.push("/produtos/vender/adicionar");
  };

  return (
    <div className="flex flex-col bg-background text-slate-gray max-w-[1000px] mx-auto px-8 md:px-10 lg:px-16 pb-10 pt-10 md:pt-16 lg:pt-20">
      <span className="text-center text-[30px] font-medium leading-[34px]">
        Qual o modo <br />
        de cultivo?
      </span>
      <span className="mt-5 text-center text-sm font-medium">
        Selecione a forma em que o produto é cultivado na sua propriedade
      </span>
      <div className="mt-5 w-full max-h-[550px] overflow-y-scroll mb-12">
        {convencionalProducts.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.name)}
            className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex mt-2"
          >
            <div className="w-2/5  p-2 flex justify-center items-center min-h-[7.5rem]">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.name}
                className="rounded-[10px] w-[125px] h-[110px]"
              />
            </div>

            <div className="w-3/5 flex flex-col py-3">
              <span className="text-left text-base leading-[20px]">
                {item.name}
              </span>
              <span className="mt-1 text-[10px] text-left">
                {item.description}
              </span>
            </div>
          </button>
        ))}

        {/* 
        <Link href="/produtos/vender/adicionar">
          <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0 relative">
                <Image
                  src={"/cultivo/cultivo_convencional.jpg"}
                  alt="Convencional"
                  layout="fill" 
                  objectFit="contain" 
                  objectPosition="center"
                  className="rounded-[10px]"
                />
              </div>
              <div className="flex flex-col p-2 min-h-[7.5rem] w-full">
                <span className="text-left text-base leading-[20px]">
                  Convencional
                </span>
                <span className="mt-1 text-[10px] text-left">
                  Utiliza fertilizantes químicos e pesticidas sintéticos.
                </span>
              </div>
            </div>
          </button>
        </Link>
        <Link href="/produtos/vender/adicionar">
          <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0 relative">
                <Image
                  src={"/cultivo/organico.jpg"}
                  alt="Orgânico"
                  layout="fill"
                  // objectFit="cover"
                  className="rounded-[10px]"
                />
              </div>
              <div className="flex flex-col p-2 min-h-[7.5rem] w-full">
                <span className="text-left text-base leading-[20px]">
                  Orgânico
                </span>
                <span className="mt-1 text-[10px] text-left">
                  Baseia-se em práticas naturais, sem o uso de produtos químicos
                  sintéticos.
                </span>
              </div>
            </div>
          </button>
        </Link>
        <Link href="/produtos/vender/adicionar">
          <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0 relative">
                <Image
                  src={"/cultivo/em transição agroecologica.jpg"}
                  alt="Em transição agroecológica"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[10px]"
                />
              </div>
              <div className="flex flex-col p-2 min-h-[7.5rem] w-full">
                <span className="text-left text-base leading-[20px]">
                  Em transição agroecológica
                </span>
                <span className="mt-1 text-[10px] text-left">
                  Fase de transição para métodos sustentáveis, reduzindo a
                  dependência de produtos químicos.
                </span>
              </div>
            </div>
          </button>
        </Link>
        <Link href="/produtos/vender/adicionar">
          <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0 relative">
                <Image
                  src={"/cultivo/hidroponico.jpg"}
                  alt="Hidroponia"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[10px]"
                />
              </div>
              <div className="flex flex-col p-2 min-h-[7.5rem] w-full">
                <span className="text-left text-base leading-[20px]">
                  Hidroponia
                </span>
                <span className="mt-1 text-[10px] text-left">
                  Crescimento de plantas em água, sem solo, fornecendo
                  nutrientes diretamente às raízes.
                </span>
              </div>
            </div>
          </button>
        </Link> */}
      </div>
    </div>
  );
}
