import { Cycle } from "./components/Cycle";

const cycles = [
  {
    name: "Ciclo do Eduardo",
    offering: [1, 2],
    ordering: [3, 4, 5],
    dispatching: [6, 7],
  },
  {
    name: "Ciclo do Joao",
    offering: [2, 3],
    ordering: [4, 5],
    dispatching: [6, 7, 1],
  },
  {
    name: "Ciclo do Eduardo",
    offering: [1, 2],
    ordering: [3, 4, 5],
    dispatching: [6, 7],
  },
  {
    name: "Ciclo do Joao",
    offering: [2, 3],
    ordering: [4, 5],
    dispatching: [6, 7, 1],
  },
  {
    name: "Ciclo do Eduardo",
    offering: [1, 2],
    ordering: [3, 4, 5],
    dispatching: [6, 7],
  },
  {
    name: "Ciclo do Joao",
    offering: [2, 3],
    ordering: [4, 5],
    dispatching: [6, 7, 1],
  },
];

export default function Home() {
  const renderCycles = () => {
    return cycles.map((cycleData, index) => (
      <div key={index} className="mb-4">
        <Cycle cycleData={cycleData} />
      </div>
    ));
  };

  return (
    <div className="flex flex-col px-[20px] bg-background text-slate-gray">
      <span className="mt-14 text-[30px] leading-[34px] text-center mx-auto font-medium">
        Selecione um ciclo
      </span>
      <span className="mt-4 max-w-[270px] text-sm font-medium text-center mx-auto">
        Selecione o ciclo em que deseja ofertar seus produtos
      </span>
      <div className="mt-12 overflow-auto max-h-screen">{renderCycles()} </div>
    </div>
  );
}
