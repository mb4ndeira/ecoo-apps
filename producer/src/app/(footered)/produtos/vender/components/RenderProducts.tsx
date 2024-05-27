"use client";

import { GetProducts } from "@producer/app/_actions/products/GetProducts";
import Image, { ImageLoader } from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState, useCallback } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { debounce } from "lodash";

interface Products {
  id: string;
  name: string;
  image: string;
  pricing: string;
}

export default function RenderProducts() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>("");
  const [products, setProducts] = useState<Products[]>([]);
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMore = useCallback(
    debounce(() => {
      setPage((prev) => prev + 1);
    }, 300),
    []
  );

  const handleChangeInput = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      setPage(1);
      setProducts([]);
    }, 300),
    []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await GetProducts({ name: query, page });
      setProducts((prevProducts) =>
        page === 1 ? response?.data : [...prevProducts, ...response?.data]
      );
    };
    fetchProducts();
  }, [query, page]);

  const handleSelectProduct = (id: string, name: string, pricing: string) => {
    const dataOnStorage = JSON.parse(
      localStorage.getItem("offer-products-data") as string
    );

    localStorage.setItem(
      "offer-products-data",
      JSON.stringify({
        ...dataOnStorage,
        name,
        id,
        pricing,
      })
    );

    router.push("/produtos/vender/adicionar");
  };

  const imageLoader: ImageLoader = ({ src }) => {
    return `https://res.cloudinary.com/dwm7zdljf/image/upload/v1706539060/products/256x256_${src}`;
  };

  const lastProductRef = useCallback(
    (node: HTMLButtonElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadMore]
  );

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
      <div className="w-full mb-5 flex flex-col justify-between">
        <div className="grid grid-cols-2 justify-items-start gap-3 w-full mt-4 p-4">
          {products.map((product, index) => (
            <button
              className="flex flex-col items-center rounded-2xl w-full h-[160px] p-2.5 bg-white"
              key={product.id}
              ref={products.length === index + 1 ? lastProductRef : null}
              onClick={() =>
                handleSelectProduct(product.id, product.name, product.pricing)
              }
            >
              <div className="relative w-full min-w-[130px] h-[100px] rounded-[10px]">
                <Image
                  className="rounded-[10px]"
                  loader={imageLoader}
                  src={product.image}
                  alt={`${product.name.toLowerCase()}.jpg`}
                  quality={256}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="pt-2.5 text-base leading-[22px] tracking-tight text-slate-gray">
                {product.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
