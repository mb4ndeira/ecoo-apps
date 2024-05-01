import { Key } from "react";
import { GetCycles } from "../../../../../_actions/products/GetCycles";
import { Cycle } from "./Cycle";

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
