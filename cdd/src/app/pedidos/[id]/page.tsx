'use client'

import { Order, fetchOrder } from "@cdd/app/_actions/fetch-order"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { LuChevronLeft } from "react-icons/lu"

export default function Home(){
  const [order, setOrder] = useState<Order | null>()

  const params = useParams()

  const { id } = params

  useEffect(() => {
    (async () => {
      setOrder(await fetchOrder(id as string))
    })()
  }, [])

  return(
    <div className="w-full h-screen flex flex-col p-5 bg-background">
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-1/5 flex flex-col items-center mt-12">
          <span className="text-center font-medium text-3xl text-slate-gray">
            Informações do <br /> pedido
          </span>
          <span className="text-center text-slate-gray text-sm mt-5 font-medium">
            Revise todas as informações antes de <br />
            fazer a entrega do pedido
          </span>
        </div>
        <div className="w-full h-3/5 flex flex-col mt-5">
          <table className="bg-white w-full p-10 rounded-lg text-primary text-">
            <tbody>
              <tr>
                <td className="w-1/4 p-3">Pagamento: </td>
                <td className="w-3/4 p-3">{order?.payment_method}</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Endereço: </td>
                <td className="w-3/4 p-3">{order?.shipping_address}</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3 border-primary">Preço: </td>
                <td className="w-3/4 p-3">R${order?.price}</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3 border-primary">Produtor: </td>
                <td className="w-3/4 p-3">{order?.customer.first_name} {order?.customer.last_name}</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3 border-primary">Produtos: </td>
                <td className="w-3/4 p-3">{order?.items[0].agribusiness.products.map((produto) => produto.name)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full mt-2 h-1/5 flex flex-col justify-end">
          <div className="flex items-center mt-2">
            <Link href={"/pedidos"} className="flex items-center gap-2 text-sm font-medium text-default w-auto">
              <LuChevronLeft className="w-[30px] h-[30px] text-default" />
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}