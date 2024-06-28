import {
  SuccessReturn,
  ExceptionReturn,
  UseCaseHandler,
} from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

export const updateOrderStatus: UseCaseHandler<
  { access_token: string; order_id: string; status: string },
  { success: boolean }
> = async ({ access_token, order_id, status }, stubbed) => {
  if (stubbed) {
    return new SuccessReturn({
      success: true,
    });
  }

  const response = (
    await ecooAPIHTTPProvider.updateOrderStatus(access_token, order_id, status)
  ).data;

    return new SuccessReturn({
        success: response.status == 200,
    });
  
};
