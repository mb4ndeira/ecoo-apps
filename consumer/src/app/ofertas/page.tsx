"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import { Cycle, fetchCycles } from "../_actions/fetch-cycles";
import { Offer, Product, fetchOffers } from "../_actions/fetch-offers";
import CardProduto from "./components/card-produto";


export default function Ofertas(){

    const router = useRouter();

    const [cycles, setcycle] = useState([] as Cycle[]);
    const [offers, setOffers] = useState([] as Offer[]);
    const [productsOffer, setProductsOffer] = useState([] as Product[]);
    const [page, setPage] = useState(1 as number);
    const products: any[] = [];
  
    useEffect(() => {
      const tg = (window as any).Telegram.WebApp;
      tg.onEvent("mainButtonClicked",  sendData);
      return () => {
        tg.offEvent("mainButtonClicked", sendData);
      }
    });

    useEffect(() => {
      const tg = (window as any).Telegram.WebApp;

      tg.MainButton.setParams({
        text: "Concluir",
        color: "#545F71"
      });
    });

    useEffect(()=> {
      const tg = (window as any).Telegram.WebApp;

      // if(mainButton){
        tg.MainButton.show();
      // }else{
      //   tg.MainButton.hide();
      // }
    });
  
    useEffect(() => {
        (async () => {
          setcycle(await fetchCycles());
        })();
      }, []);

    useEffect(() => {
        (async () => {
            if (cycles.length > 0) {
                const cycle_id = cycles.find((cycle) => cycle.alias.toLocaleLowerCase() == 'semanal')?.id
                setOffers(await fetchOffers(cycle_id, page))
            }
        })();
    },[cycles]);

    useEffect(() => {
      
      const farm_id = "a581beb2-ef92-4a57-b7d4-00f82370010c"
      let data = offers.find((offer) => offer.id = farm_id)?.offer.products

      if(!data && offers.length > 0){
        setPage(page+1)
      }
      
      setProductsOffer(data ?? [])

    }, [offers])


    const handleAddOrRemove = (product: any) => {

        let indexProduct = products.findIndex(
            (product) => product.id == product.id
          );
      
          if (indexProduct !== -1)
            if(product.quantity == 0)
                products.splice(indexProduct, 1);
            else
                products[indexProduct].quantity = product.quantity;
          else
            products.push(product);
        
        // setData(products);

        // console.log("data")
        // console.log(data)
        
    }

    const sendData = async ()=> {
      const tg = (window as any).Telegram.WebApp;

      await tg.sendData(JSON.stringify(products));
    };
    
    const redirectCart = () => {

      const query = new URLSearchParams(JSON.stringify(products)).toString();
      router.push(`/carrinho`);
    }
return (

  <>
    <Script src="https://telegram.org/js/telegram-web-app.js"/>
  
    <div className="flex flex-col">


      <div className="w-full min-h-[72px] flex items-center justify-center bg-[#F7F7F7]">
        <div className="flex-none ml-3">
          <div className="w-5 h-5 bg-white rounded-3xl">
            <Link href={"/produtores"}>
              <Image src="/back.png" alt="back" width={15} height={11.7}></Image>
            </Link>
          </div>
        </div>
        <div className="grow text-center text-base font-inter m-2">Produtos</div>
        <div className="flex-none mr-3">
          <div className="w-5 h-5 bg-white rounded-3xl">
            {/* <Link href={redirectCart}> */}
              <Image onClick={redirectCart} src="/cart.png" alt="cart" width={15} height={15}></Image>
            {/* </Link> */}
          </div>
        </div>

      </div>

      <div className="scroll-smooth scrol-ml-1 ml-3 mr-3 mt-3">
        {productsOffer && productsOffer.length !== 0 ? productsOffer.map((product, index) => {
            return (
                <CardProduto product={product} onAddOrRemove={handleAddOrRemove} exclude={null}>

                </CardProduto>
            );
          }) : null}
      </div>

      {/* <div className="flex w-full h-14 bg-[#545F71] justify-center ">
        <button className="text-white text-center w-[63px]">Concluir</button>
      </div> */}
    </div>
    {/* <div className={`w-full`}>
      <div className="relative mt-8 w-full">
        <div className="w-full mb-5  flex flex-col justify-between">
            <div className="grid grid-cols-2 justify-items-start gap-3 w-full mt-4 p-4">
            {offers && offers.length !== 0 ? offers.map((offer, index) => {
            return (
                <CardOferta offer={offer} onAddOrRemove={handleAddOrRemove}>

                </CardOferta>
            );
          }) : null}
            </div>
        </div>
        <div>
        <button onClick={handleAdvance}>Avançar</button>
      </div>
      </div>
    </div> */}
  </>
)
}
  