'use client'

import getWeekDays from '@shared/utils/get.week.days'
import { useEffect, useState } from 'react'

export default function Table(){
  const [offering, setOffering] = useState<number[]>()
  const [ordering, setOrdering] = useState<number[]>()
  const [dispatching, setDispatching] = useState<number[]>()
 
  useEffect(() => {
    const savedCycleString = localStorage.getItem("selected-cycle")
    const savedCycleData = savedCycleString ? JSON.parse(savedCycleString) : null
  
    const { offering, ordering, dispatching } = savedCycleData

    setOffering(offering)
    setOrdering(ordering)
    setDispatching(dispatching)
  }, [])

  return(
    <div className="bg-white rounded-lg h-full">
      <table className="min-w-full table-fixed">
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="py-2 px-4 text-[#545F71] text-base w-1/2">Duração do ciclo:</td>
            <td className="py-2 px-4 font-bold text-walnut-brown w-1/2">7 dias</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-[#545F71] text-base w-1/2">Ofertas:</td>
            <td className="py-2 px-4 font-bold text-walnut-brown w-1/2">{getWeekDays({
              array: offering,
              short: true
            }).map((day) => (
              `${day}, `
            ))}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-[#545F71] text-base w-1/2">Pedidos:</td>
            <td className="py-2 px-4 font-bold text-walnut-brown w-1/2">{getWeekDays({
              array: ordering,
              short: true
            }).map((day) => (
              `${day}, `
            ))}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-[#545F71] text-base w-1/2">Entregas:</td>
            <td className="py-2 px-4 font-bold text-walnut-brown w-1/2">{getWeekDays({
              array: dispatching,
              short: true
            }).map((day) => (
              `${day}, `
            ))}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-[#545F71] text-base w-1/2">Manutenção:</td>
            <td className="py-2 px-4 font-bold text-walnut-brown w-1/2">****</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-[#545F71] text-base w-1/2">Próximo feriado:</td>
            <td className="py-2 px-4 font-bold text-walnut-brown w-1/2">****</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}