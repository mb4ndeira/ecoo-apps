"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Cycle, fetchCycles } from "../../_actions/fetch-cycles";
import { Offer, fetchOffers } from "../../_actions/fetch-offers";

export default function Produtores() {
  const [cycles, setcycle] = useState([] as Cycle[]);
  const [offers, setOffers] = useState([] as Offer[]);
  const [producers, setProducers] = useState([] as any[]);

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
        setOffers(await fetchOffers(cycle_id));
      }
    })();
  }, [cycles]);

  useEffect(() => {
    const data = offers.map((offer) => {
      return { id: offer.id, name: offer.name };
    });

    setProducers(data);
  }, [offers]);

  return (
    <>
      <div className="h-screen scroll-smooth scrol-ml-1 ml-3 mr-3 mt-3">
        {producers && producers.length !== 0
          ? producers.map((producer) => {
              return (
                <>
                  <div className="w-full min-h-[100px] bg-[rgb(246,246,246)] flex rounded-2xl mb-3">
                    <div className="flex-none w-20 min-h-20 bg-[#00735E] m-2 rounded-2xl"></div>
                    <div className="grow flex flex-col items-center justify-center min-h-20 mt-2 mb-2">
                      <span className="w-full text-left font-poppins text-base">
                        {producer.name}
                      </span>
                    </div>
                    <div className="flex min-w-24 min-h-20 items-center justify-center m-2">
                      {/* <div className="w-6 h-6"> */}
                      <Link href={`/ofertas/${producer?.id}`}>
                        <Image
                          src="/seta-produtor.png"
                          alt="seta-produtor"
                          width={10}
                          height={7}
                        ></Image>
                      </Link>
                      {/* </div> */}
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}
