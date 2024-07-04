import { Key } from "react";
import { Cycle } from "./Cycle";
import { GetCycles } from "@producer/app/_actions/products/GetCycles";

export async function Cards() {
  const cycles = await GetCycles();

  const renderCycles = () => {
    return cycles?.reply.map(
      (cycleData: any, index: Key | null | undefined) => (
        <div key={index} className="mb-4">
          <Cycle cycleData={cycleData} />
        </div>
      )
    );
  };
  return (
    <div className="mt-12 overflow-auto max-h-screen">{renderCycles()}</div>
  );
}
