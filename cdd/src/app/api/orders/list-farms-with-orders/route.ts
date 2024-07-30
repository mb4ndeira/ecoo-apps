import { NextRequest, NextResponse } from "next/server";
import { ACTIONS } from "@shared/_actions";
import { ExceptionReturn } from "@shared/core/UseCase";

export async function POST(request: NextRequest){
  const { cycle_id, page, name } = await request.json();

  const result = await ACTIONS["list-farms-with-orders"].execute({
    cycle_id: cycle_id as string,
    page: Number(page as string),
    name: name as string,
  });

  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }
  return NextResponse.json(result);
}