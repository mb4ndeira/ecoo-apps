import { SuccessReturn, UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

export interface CycleData {
  id: string;
  alias: string;
  offering: number[];
  ordering: number[];
  dispatching: number[];
}

export const getCycles: UseCaseHandler<
  { access_token: string },
  CycleData[]
> = async ({ access_token }, stubbed) => {
  if (stubbed) {
    return new SuccessReturn([{
      id: "1",
      alias: "Ciclo",
      offering: [1, 7],
      ordering: [2, 3, 4],
      dispatching: [5, 6]
    }]);
  }

  const cycles = (await ecooAPIHTTPProvider.getCycles(access_token)).data

  return new SuccessReturn(cycles);
};
