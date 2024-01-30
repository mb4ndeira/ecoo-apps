"use client";
import Footer from "@/components/Footer";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const varieties = [
  {
    from: "001",
    name: "Tomate Gaúcho",
    description: "Grande, redondo, cores variadas, polpa suculenta.",
    image: "/produtos/tomate_gaucho.jpeg",
  },
  {
    from: "001",
    name: "Tomate Italiano",
    description: "Alongado, grande, pele lisa, polpa densa para molhos.",
    image: "/produtos/tomate_italiano.jpg",
  },
  {
    from: "001",
    name: "Tomate Cereja",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "/produtos/tomate_cereja.jpg",
  },
  {
    from: "001",
    name: "Tomate Longa Vida",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "/produtos/tomate_longa_vida.jpg",
  },
  {
    from: "002",
    name: "Batata Inglesa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "002",
    name: "Batata Baroa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "002",
    name: "Batata Branca",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "002",
    name: "Batata Rosa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "009",
    name: "Abóbora Cabotiá",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "009",
    name: "Abóbora Japonesa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "009",
    name: "Abóbora Moranga",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "009",
    name: "Abóbora Paulista",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "010",
    name: "Abobrinha Brasileira",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "010",
    name: "Abobrinha Italiana",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "003",
    name: "Alface Americana",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "003",
    name: "Alface Crespa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "003",
    name: "Alface Lisa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "003",
    name: "Alface Mimosa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "003",
    name: "Alface Quatro Estações",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "003",
    name: "Alface Roxa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "016",
    name: "Alho",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "016",
    name: "Alho Poró",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "017",
    name: "Berinjela Comum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "017",
    name: "Berinjela Japonesa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "020",
    name: "Cebola",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "020",
    name: "Cebola Roxa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "024",
    name: "Couve",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "024",
    name: "Couve Bruxelas",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "037",
    name: "Pimenta Cambuci",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "037",
    name: "Pimenta Malagueta",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "037",
    name: "Pimenta Vermelha",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "037",
    name: "Pimenta Dedo-de-moça",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "038",
    name: "Pimentão Amarelo",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "038",
    name: "Pimentão Verde",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "038",
    name: "Pimentão Vermelho",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "051",
    name: "Banana Caturra",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "051",
    name: "Banana Maçã",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "051",
    name: "Banana Nanica",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "051",
    name: "Banana Prata",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "060",
    name: "Laranja do Céu",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "060",
    name: "Laranja Pera",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "060",
    name: "Laranja Umbigo",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "061",
    name: "Limão Bergamota",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "061",
    name: "Limão Taiti",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "004",
    name: "Maçã Nacional Fuji",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "004",
    name: "Maçã Nacional Gala",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "062",
    name: "Mamão Formosa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "062",
    name: "Mamão Papaya",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "064",
    name: "Maracujá Azedo",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "064",
    name: "Maracujá Doce",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "066",
    name: "Melão Amarelo",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "066",
    name: "Melão Casca de Carvalho",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "070",
    name: "Arroz Branco",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "070",
    name: "Arroz Cateto",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "070",
    name: "Arroz Integral",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "070",
    name: "Arroz Parbolizado",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "071",
    name: "Ervilha Comum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "071",
    name: "Ervilha Torta",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "073",
    name: "Feijão Azuki",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "073",
    name: "Feijão Branco",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "073",
    name: "Feijão Carioca",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "073",
    name: "Feijão Fradinho",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "073",
    name: "Feijão Preto",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "073",
    name: "Feijão Vermelho",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "007",
    name: "Ovo Branco",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "007",
    name: "Ovo de Codorna",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "007",
    name: "Ovo vermelho",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Bagre",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Jundiá",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Burriquete",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Camarão",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Corvina",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Linguado",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Miraguaia",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "JundPeixe Rei",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Pintado",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Siri",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Tainha",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
  {
    from: "008",
    name: "Traíra",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, distinctio!",
    image: "",
  },
];

export default function Home() {
  const session = sessionStorage.getItem("isLogged")

  if(!session){
    redirect('/login')
  }

  const searchParams = useSearchParams();
  const idUrl: string | null = searchParams.get("id");
  const filteredVarieties = varieties.filter(
    (variety) => variety.from === idUrl
  );

  const router = useRouter();

  const handleClick = (id: string) => {
    let path = "";
    if (id == "008") {
      path = "variedade/comercializacao?id=" + id;
    } else {
      path = "variedade/cultivo?id=" + id;
    }
    router.push(path);
  };

  return (
    <div className="flex flex-col bg-background text-slate-gray max-w-[1000px] mx-auto px-8 md:px-10 lg:px-16 pb-10 pt-10 md:pt-16 lg:pt-20">
      <span className="text-center text-[30px] font-medium leading-[34px]">
        Escolha a <br />
        variedade
      </span>
      <span className="mt-5 text-center text-sm font-medium">
        Selecione uma das variedades do produto que irá vender
      </span>
      <div className="mt-5 w-full max-h-[550px] md:max-h-[550px] overflow-y-scroll ">
        {filteredVarieties.map((variety) => (
          <button
            key={variety.from}
            className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2"
            onClick={() => handleClick(variety.from)}
          >
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0 relative">
                <Image
                  src={variety.image}
                  alt={variety.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[10px]"
                />
              </div>
              <div className="flex flex-col p-2 min-h-[7.5rem] ">
                <span className="text-left text-base leading-[20px]">
                  {variety.name}
                </span>
                <span className="mt-1 text-[10px] text-left">
                  {variety.description}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
      <Footer backButton={true} />
    </div>
  );
}
