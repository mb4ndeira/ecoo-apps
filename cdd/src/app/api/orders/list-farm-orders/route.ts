import { NextRequest, NextResponse } from "next/server";
import { ACTIONS } from "@shared/_actions";
import { ExceptionReturn } from "@shared/core/UseCase";

export async function POST(request: NextRequest){
  const { farm_id, cycle_id } = request.json();
  const result = await ACTIONS["list-farm-orders"].execute({
    farm_id,
    cycle_id
  });
  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }
  return NextResponse.json(result);
}