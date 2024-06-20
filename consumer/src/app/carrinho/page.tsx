"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CardProduto from "../ofertas/components/card-produto";


export default function FinalizarCompras(){

    const router: any = useRouter();

  
    // useEffect(() => {
    //   console.log("router.query")
    //   console.log(router.query)
    //   if (router.query) {
    //     console.log("router")
    //     console.log(router)
    //     const valueProducts = decodeURIComponent(router.query.products as string);
    //     setProducts(JSON.parse(valueProducts));
    //   }
    // }, [router.query.]);

    let valueProducts: any[] = [
        {
            "product": {
                "id": "11ed7f29-fbb5-4310-ab62-5db1dc161c00",
                "image": "alcachofra.jpg",
                "name": "Alcachofra",
                "pricing": "UNIT"
            },
            "amount": 4,
            "price": 10,
            "quantity": 4
        },
        {
            "product": {
                "id": "051163c1-fbe5-4ba2-a6aa-2e6262909439",
                "image": "alface_mimosa.jpg",
                "name": "Alface Mimosa",
                "pricing": "UNIT"
            },
            "amount": 5,
            "price": 10,
            "quantity": 5
        }
    ]


    const [products, setProducts]: [any[], any] = useState(valueProducts);


    const handleAddOrRemove = (offer: any) => {

        let indexProduct = products.findIndex(
          (product : any) => product.id == offer.product.id
        );
    
        if (indexProduct !== -1)
          if(offer.quantity == 0)
              products.splice(indexProduct, 1);
          else
              products[indexProduct].quantity = offer.quantity;
        else
          products.push(offer);
        
        setProducts(products)
      
    }

    const exludeItemCar = (id: any) => {

      console.log("id")
      console.log(id)

      let indexProduct = products.findIndex(
          (product) => product.id == id
        );
    

      products.splice(indexProduct, 1);

      setProducts(products)

      
  }
  
    return (

      <div className="flex flex-col w-full h-screen">


        <div className="w-full min-h-[72px] flex items-center bg-[#F7F7F7]">
          <div className="flex-none ml-3">
            <div className="w-5 h-5 bg-white rounded-3xl">
              <Link href={"/ofertas"}>
                <Image src="/back.png" alt="back" width={15} height={11.7}></Image>
              </Link>
            </div>
          </div>
          <div className="grow text-center text-base font-inter m-2">Carinho</div>
          <div className="flex-none mr-3">
            <div className="w-5 h-5 bg-white rounded-3xl">
              <Image src="/cart.png" alt="cart" width={15} height={15}></Image>
            </div>
          </div>

        </div>

        <div className="h-screen scroll-smooth scrol-ml-1 ml-3 mr-3 mt-3">
          {products && products.length !== 0 ? products.map((product, index) => {
              return (
                  <CardProduto product={product} onAddOrRemove={handleAddOrRemove} exclude={exludeItemCar}>

                  </CardProduto>
              );
            }) : null}
        </div>
        

        <div className="w-full min-h-[117px] bg-[#F7F7F7] flex flex-col">
            <div className="w-full font-inter text-xs">
              <span className="w-1/2 text-left p-2 inline-block">Subtotal:</span>
              <span className="w-1/2 text-right p-2 inline-block">R$23,90</span>
            </div>
            <div className="w-full font-inter text-xs">
            <span className="w-1/2 text-left p-2 inline-block">Entrega:</span>
            <span className="w-1/2 text-right p-2 inline-block">R$10,00</span>
            </div>
            <div className="bg-[#D1D1D6] w-[90%] border-[1px]"></div>
            <div className="w-full font-inter">
              <span className="w-1/2 text-left text-xs p-2 inline-block">Total:</span>
              <span className="w-1/2 text-right text-base p-2 inline-block">R$33,90</span>
            </div>
        </div>
      </div>


      )
}