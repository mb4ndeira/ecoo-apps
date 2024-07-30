import { SuccessReturn, UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";
import { CycleDTO } from "@shared/domain/dtos/cycle-dto";

export const getCycles: UseCaseHandler<
  { access_token: string },
  CycleDTO[]
> = async ({ access_token }, stubbed) => {
  if (stubbed) {
    return new SuccessReturn([
      {
        id: "1",
        alias: "Ciclo",
        offer: [1, 7],
        order: [2, 3, 4],
        deliver: [5, 6],
        created_at: new Date(),
        updated_at: null,
      },
    ]);
  }

  const cycles = (await ecooAPIHTTPProvider.getCycles(access_token)).data;

  return new SuccessReturn(cycles as CycleDTO[]);
};
