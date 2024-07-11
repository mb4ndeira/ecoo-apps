"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { Cycle, fetchCycles } from "../../_actions/fetch-cycles";
import { FarmOffer, fetchOffers } from "../../_actions/fetch-offers";
export default function Produtores() {
  const [cycles, setcycle] = useState([] as Cycle[]);
  const [producers, setProducers] = useState([] as any[]);
  const [page, setPage] = useState(1 as number);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView()


  useEffect(() => {
    (async () => {
      setcycle(await fetchCycles());
    })();
  }, []);
  
  const serachProducers = async () => {

    const cycle_id = cycles.find(
      (cycle) => cycle.alias.toLocaleLowerCase() == "semanal"
    )?.id;

    const responseOffers: FarmOffer[] = await fetchOffers(cycle_id, page);

    let newProducers = responseOffers.map((offer) => {
      return { id: offer.id, name: offer.name };
    });

    if(newProducers.length == 0){
      setIsLoading(false)
      return
    }

    setProducers((producers) => [...producers, ...newProducers])
    setPage((page) => page + 1)

  }

  useEffect(() => {
    if (inView) {
      serachProducers();
    }
  }, [inView, cycles])


  return (
    <>
      <div className="overflow-y-scroll  scroll-smooth scrol-ml-1 ml-3 mr-3 mt-3">
        {producers && producers.length !== 0
          ? producers.map((producer) => {
              return (
                <>
                  <Link href={`/ofertas/${producer?.id}/${producer?.name}`}>
                    <div className="w-full min-h-[100px] bg-[rgb(246,246,246)] flex rounded-2xl mb-3">
                      <div className="flex-none w-20 min-h-20 bg-[#00735E] m-2 rounded-2xl"></div>
                      <div className="grow flex flex-col items-center justify-center min-h-20 mt-2 mb-2">
                        <span className="w-full text-left font-poppins text-base">
                          {producer.name}
                        </span>
                      </div>
                      <div className="flex min-w-24 min-h-20 items-center justify-center m-2">
                        {/* <div className="w-6 h-6"> */}
                        <Image
                          src="/arrow.png"
                          alt="arrow"
                          width={10}
                          height={7}
                        ></Image>
                        {/* </div> */}
                      </div>
                    </div>
                  </Link>
                </>
              );
            })
          : null}
        <div>
          { isLoading && cycles.length > 0 ?
            <div ref={ref}>
            </div>: null
          }
        </div>
      </div>
    </>
  );
}
