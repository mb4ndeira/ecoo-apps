"use client";
import {
  FarmOffers,
  Offer,
  fetchOffersFarm,
} from "@consumer/app/_actions/fetch-offers-farm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CardOferta from "../../../components/card-oferta";

export default function Ofertas() {
  const params = useParams();

  const [offers, setOffers] = useState([] as Offer[]);
  const [page, setPage] = useState(1 as number);
  const [nameFarm, setNameFarm] = useState("" as string);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView();

  const searchOffers = async () => {


    const responseFarmOffers: FarmOffers | null = await fetchOffersFarm(
      params.id as string,
      params.cycle_id as string,
      page
    );

    const offersFarm = responseFarmOffers?.offers ?? [];

    if (offersFarm.length == 0) {
      setIsLoading(false);
      return;
    }

    const newOffers = [...offers, ...offersFarm];
    setOffers(newOffers);
    setPage((page) => page + 1);

  };

  useEffect(() => {
    if (inView) {
      console.log("searchOffers");
      searchOffers();
    }
  }, [inView]);

  return (
    <>
      <div className="w-[98%] overflow-y-scroll scrol-ml-1 ml-3 mr-3 mt-3">
        {offers && offers.length !== 0
          ? offers.map((offer, index) => {
              return (
                <CardOferta
                  key={index}
                  offer={offer}
                  // nameFarm={nameFarm}
                  exclude={false}
                ></CardOferta>
              );
            })
          : null}
        <div className="w-[98%]">
          {isLoading ? 
          <div ref={ref}>Carregando...</div> : null}
        </div>
      </div>
    </>
  );
}
