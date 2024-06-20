"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cycle, fetchCycles } from "../_actions/fetch-cycles";
import { Offer, fetchOffers } from "../_actions/fetch-offers";


export default function Produtores(){

    // const router: any = useRouter();
    // const [products, setProducts] = useState([]);

    
  
    // useEffect(() => {
    //   if (router.query.products) {
    //     setProducts(JSON.parse(router.query.products));
    //   }
    // }, [router.query.products]);


    const [cycles, setcycle] = useState([] as Cycle[]);
    const [offers, setOffers] = useState([] as Offer[]);
    const [producers, setProducers] = useState([] as any[])

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
                setOffers(await fetchOffers(cycle_id))
            }
        })();
    },[cycles]);

    useEffect(() => {
      
      const data = offers.map((offer) => {
        return { id: offer.id, name: offer.name}
      });

      setProducers(data)
    }, [offers])


    const sendData = async ()=> {
      const tg = (window as any).Telegram.WebApp;

      await tg.sendData(JSON.stringify(products));
    };
    

    const produtores: any[] = ["Sítio Silva", "Granja da Nona", "Quitanda do Português", "Chácara Barros"]
  
    return (

      <div className="flex flex-col w-full h-screen">


        <div className="w-full min-h-[72px] flex items-center bg-[#F7F7F7]">
          <div className="flex-none ml-3">
            <div className="w-5 h-5 bg-white rounded-3xl">
              <Link href={"/inicio"}>
                <Image src="/back.png" alt="back" width={15} height={11.7}></Image>
              </Link>
            </div>
          </div>
          <div className="grow text-center text-base font-inter m-2">Produtores</div>
          <div className="flex-none mr-3">
            <div className="w-5 h-5 bg-white rounded-3xl">
              <Link href={"/carrinho"}>
                <Image src="/cart.png" alt="cart" width={15} height={15}></Image>
              </Link>
            </div>
          </div>

        </div>

        <div className="h-screen scroll-smooth scrol-ml-1 ml-3 mr-3 mt-3">
          {producers && producers.length !== 0 ? producers.map((producer) => {
              return (
                <>
                    <div className="w-full min-h-[100px] bg-[rgb(246,246,246)] flex rounded-2xl mb-3">
                        <div className="flex-none w-20 min-h-20 bg-[#00735E] m-2 rounded-2xl">
                        </div>
                        <div className="grow flex flex-col items-center justify-center min-h-20 mt-2 mb-2">
                            <span className="w-full text-left font-poppins text-base">{producer.name}</span>
                        </div>
                        <div className="flex min-w-24 min-h-20 items-center justify-center m-2">
                            {/* <div className="w-6 h-6"> */}
                            <Link href={"/ofertas"}>
                                <Image src="/seta-produtor.png" alt="seta-produtor" width={10} height={7}></Image>
                              </Link>
                            {/* </div> */}
                        </div>
                    </div>
                </>
              );
            }) : null}
        </div>
        
      </div>


      )
}