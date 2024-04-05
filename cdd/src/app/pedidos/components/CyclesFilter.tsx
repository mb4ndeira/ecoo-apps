import { Cycle } from "@cdd/app/_actions/fetch-cycles";
import { useState } from "react";

interface CyclesFilterProps {
  className: string;
  cycles: Cycle[];
  select: (value: string) => void;
}

export default function CyclesFilter({
  className,
  cycles,
  select,
}: CyclesFilterProps) {
  const [hasSelected, setHasSelected] = useState(false);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHasSelected(true);
    select(e.target.value);
  };

  return (
    <div className={`${className} flex flex-col gap-1 w-full`}>
      <span className="mt-2 text-sm font-medium text-slate-gray">Ciclo</span>
      <select
        className="w-full p-2 rounded-sm bg-slate-0"
        onChange={(e) => handleSelect(e)}
      >
        {!hasSelected && (
          <option value="" key={"default"}>
            Selecione um ciclo
          </option>
        )}
        {cycles.map((cycle) => (
          <option value={cycle.id} key={cycle.id}>
            {cycle.alias}
          </option>
        ))}
      </select>
    </div>
  );
}
