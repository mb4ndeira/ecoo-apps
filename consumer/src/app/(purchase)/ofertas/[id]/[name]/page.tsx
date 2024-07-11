"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCartProvider } from "../../../../../context/cart";
import { Cycle, fetchCycles } from "../../../../_actions/fetch-cycles";
import { FarmOffer, Offer, fetchOffers } from "../../../../_actions/fetch-offers";
import CardProduto from "../../components/card-produto";

export default function Ofertas() {
  const params = useParams();

  const [cycles, setcycle] = useState([] as Cycle[]);
  const [offers, setOffers] = useState([] as FarmOffer[]);
  const [offer, setOffer] = useState( {} as Offer | undefined) ;
  const [page, setPage] = useState(1 as number);
  const [nameFarm, setNameFarm] = useState("" as string);


  useEffect(() => {
    (async () => {
      setcycle(await fetchCycles());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (cycles.length > 0) {
        const cycle_id = cycles.find(
          (cycle) => cycle.alias.toLocaleLowerCase() == "semanal"
        )?.id;
        
        setOffers(await fetchOffers(cycle_id, page));
      }
    })();
  }, [cycles, page]);

  useEffect(() => {
    let farm = offers.find((farm) => (farm.id == params.id as string));
    let nameFarm = farm?.name ?? "";
    let offer = farm?.offer;

    
    if (!offer && offers.length > 0) {
      setPage((page) => page += 1);
      return
    }

    setOffer(offer);
    setNameFarm(nameFarm);
  }, [offers]);

  return (
    <>
        <div className="overflow-y-scroll scrol-ml-1 ml-3 mr-3 mt-3">
          {offer?.products && offer.products.length !== 0
            ? offer.products.map((product, index) => {
                return (
                  <CardProduto
                    key={index}
                    product={product}
                    offerId={offer.id}
                    nameFarm={nameFarm}
                    exclude={false}
                  ></CardProduto>
                );
              })
            : null}
        </div>
    </>
  );
}
