import React from "react";

interface CycleProps {
  cycleData: any;
}

const getDayOfWeek = (dayNumber: number): string => {
  const daysOfWeek = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  const adjustedDayNumber = (dayNumber - 1) % 7;
  return daysOfWeek[adjustedDayNumber];
};

export function Cycle({ cycleData }: CycleProps) {
  const { alias, offering, ordering, dispatching } = cycleData;

  const transformToDaysOfWeek = (days: number[]): string => {
    return days.map((day) => getDayOfWeek(day)).join(", ");
  };

  return (
    <button className="w-full items-start flex flex-col py-4 px-3 rounded-2xl bg-white text-slate-gray">
      <span className="font-semibold text-xl mb-2">{alias}</span>
      <span className="font-semibold text-lg">Dias de oferta: </span>
      <span className="font-normal mb-2">
        {transformToDaysOfWeek(offering)}
      </span>
      <span className="font-semibold text-lg">Dias de compra: </span>
      <span className="font-normal mb-2">
        {transformToDaysOfWeek(ordering)}
      </span>
      <span className="font-semibold text-lg">Dias de entrega: </span>
      <span className="font-normal">{transformToDaysOfWeek(dispatching)}</span>
    </button>
  );
}
