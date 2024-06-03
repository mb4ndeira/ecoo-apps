"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Cycle, fetchCycles } from "../_actions/fetch-cycles";
import { Offer, fetchOffers } from "../_actions/fetch-offers";
import CardOferta from "./components/card-oferta";


export default function Ofertas(){
    const router = useRouter();
    const [cycles, setcycle] = useState([] as Cycle[]);
    const [offers, setOffers] = useState([] as Offer[]);
    const products: any[] = [];


    const handleAdvance = () => {
      router.push("/finalizar-compras");
    };

    const [showSendData, setShowSendData] = useState(false);

    
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


    const handleAddOrRemove = (offer: any) => {

        let indexProduct = products.findIndex(
            (product) => product.id == offer.product.id
          );
      
          if (indexProduct !== -1)
            if(offer.quantity == 0)
                products.splice(indexProduct, 1);
            else
                products[indexProduct].quantity = offer.quantity;
          else
            products.push(offer);
        
    }

    const sendData = () => { 
      const tg = (window as any).Telegram.WebApp;
      tg.sendData(JSON.stringify(products));
      tg.onEvent("popupClosed");
    }

    
return (

  <>
  
    <div className={`w-full`}>
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
    </div>
  </>
)
}
  