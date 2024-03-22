'use client'

import { useParams } from "next/navigation";
import { Order, getOrder } from "@cdd/app/_actions/get-order";
import { useEffect, useState } from "react";

interface OrderProps{
  order: Order
}

export default  function Home({ order }: OrderProps) {
  const [orderInfo, setOrderInfo] = useState()

  const params = useParams()

  const { id } = params

  console.log(typeof params.id)

  useEffect(() => {
    (async () => {
      const response = await getOrder(id as string)
      
      console.log(response)
    })()
  }, [id])

  return (
    <div>
      
    </div>
  );
}


    // <div className="h-screen flex flex-col bg-background text-slate-gray p-4 md:px-10 lg:px-16 md:pt-16 lg:pt-20">
    //   <div className="flex flex-col h-[15%] justify-end">
    //     <span className="text-center text-3xl font-medium">
    //       Verificar entrega
    //     </span>
    //     <span className="mt-2 text-center text-sm font-medium">
    //       Confira os dados abaixo:
    //     </span>
    //   </div>
    //   <div className="mt-5 h-3/5 w-full overflow-y-auto">
    //     <MiniTable entrega={entregaSelecionada} />
    //   </div>

    //   <div className="h-[25%] flex flex-col justify-end">
    //     <div className="w-full left-4 right-4 mb-6 grid grid-cols-2 gap-3 self-end">
    //       <Link href={`/entregas/${entregaSelecionada.id}/justificativa`}>
    //         <button className="px-2 py-3 bg-[#FF7070] w-full rounded-md font-inter font-semibold text-white ">
    //           Rejeitar
    //         </button>
    //       </Link>
    //       <ConfirmationModal
    //         openButton={
    //           <button className="px-2 py-3 bg-[#00735E] w-full rounded-md font-inter font-semibold text-white">
    //             Aprovar
    //           </button>
    //         }
    //         link={`/entregas/${entregaSelecionada.id}/aprovar`}
    //       />
    //     </div>
    //     <Footer />
    //   </div>
    // </div>

      // if (!entregaSelecionada) {
  //   return (
  //     <div className="mt-10 flex flex-col bg-background text-slate-gray">
  //       <span className="text-center text-3xl font-medium">
  //         Verificar entrega
  //       </span>
  //       <span className="mt-2 text-center text-sm font-medium">
  //         Entrega não encontrada.
  //       </span>
  //       <Footer />
  //     </div>
  //   );
  // }