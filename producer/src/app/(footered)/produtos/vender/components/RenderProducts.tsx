"use client";
import { GetProducts } from "@producer/app/_actions/products/GetProducts";
import Image, { ImageLoader } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, use, useEffect, useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuChevronLeft } from "react-icons/lu";

interface Products {
  id: string;
  name: string;
  image: string;
  pricing: string;
}

export default function RenderProducts() {
  const [page, setPage] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>("");
  const [products, setProducts] = useState<[Products] | []>();
  const router = useRouter();

  const handleChangeInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(async () => {
      setQuery(inputRef.current?.value as string);
    }, 200);
  };

  const backPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (page < 8) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    (async () => {
      if (query !== "") {
        const response = await GetProducts({ name: query, page: 1 });
        setProducts(response?.data);
        return;
      }

      const response = await GetProducts({ name: query, page: page });

      setProducts(response?.data);
    })();
  }, [query, page]);

  const handleSelectProduct = (id: string, name: string, pricing: string) => {
    const dataOnStorage = JSON.parse(
      localStorage.getItem("offer-products-data") as string
    );

    localStorage.setItem(
      "offer-products-data",
      JSON.stringify({
        ...dataOnStorage,
        name: name,
        id: id,
        pricing: pricing,
      })
    );

    router.push("/produtos/vender/adicionar");
  };

  const imageLoader: ImageLoader = ({ src }) => {
    return `https://res.cloudinary.com/dwm7zdljf/image/upload/v1706539060/products-images/256x256_${src}`;
  };

  return (
    <div className="w-full">
      <div className="relative mt-8 w-full">
        <form>
          <input
            onChange={handleChangeInput}
            ref={inputRef}
            className="border border-french-gray rounded-md h-12 p-4 pr-10 text-base inter-font w-full"
            type="text"
          />
          <button type="submit">
            <HiOutlineSearch
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              size={24}
            />
          </button>
        </form>
      </div>
      <div className="w-full h-full mb-5 flex flex-col justify-between">
        <div className="grid grid-cols-2 justify-items-start gap-3 w-full mt-4 p-4">
          {products && products.length !== 0
            ? products.map((product, index) => {
                return (
                  <button
                    className="flex flex-col items-center rounded-2xl w-full h-[160px] p-2.5 bg-white"
                    key={index}
                    onClick={() =>
                      handleSelectProduct(
                        product.id,
                        product.name,
                        product.pricing
                      )
                    }
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
              })
            : null}
        </div>
        {!products || products.length === 0 ? (
          <div className="w-full flex justify-center right-2 items-center fixed bottom-16 gap-4 text-lg text-slate-gray mt-2">
            <button onClick={backPage}>
              <IoIosArrowBack />
            </button>
            {page}
            <button onClick={nextPage}>
              <IoIosArrowForward />
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center gap-4 items-center text-lg text-slate-gray mt-2">
            <button onClick={backPage}>
              <IoIosArrowBack />
            </button>
            {page} de {Math.ceil(products.length / 8)}
            <button onClick={nextPage}>
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </div>
      {!products || products.length === 0 ? (
        <div className="flex items-center mt-2 fixed bottom-4">
          <LuChevronLeft className="w-[30px] h-[30px] text-default" />
          <Link
            className="flex items-center gap-2 text-sm font-medium text-default w-auto"
            href={"/produtos/vender/ciclo"}
          >
            Voltar
          </Link>
        </div>
      ) : (
        <div className="flex items-center mt-2">
          <LuChevronLeft className="w-[30px] h-[30px] text-default" />
          <Link
            className="flex items-center gap-2 text-sm font-medium text-default w-auto"
            href={"/produtos/vender/ciclo"}
          >
            Voltar
          </Link>
        </div>
      )}
    </div>
  );
}
