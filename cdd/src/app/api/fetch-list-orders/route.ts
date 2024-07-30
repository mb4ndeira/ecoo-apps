import { NextRequest, NextResponse } from "next/server";
import { ExceptionReturn } from "@shared/core/UseCase";
import { fetchListOrders } from "@cdd/app/_actions/fetch-list-orders";

export async function POST(request: NextRequest) {
  const { cycle_id, page, status } = await request.json();

  const result = await fetchListOrders(cycle_id, page, status);
  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }
  return NextResponse.json(result);
}
