import { NextRequest, NextResponse } from "next/server";
import { ACTIONS } from "@shared/_actions";
import { ExceptionReturn } from "@shared/core/UseCase";


export async function PATCH(request: NextRequest){
  const { cycle_id, farm_id, status, 
    _successUrl,
   } = await request.json();
  
   const successUrl = new URL(_successUrl, request.url);
    const result = await ACTIONS["handle-orders-delivery"].execute({
        cycle_id,
        farm_id,
        status,
        });
    if (result instanceof ExceptionReturn) {
        throw new Error(result.message);
    }
    return NextResponse.redirect(successUrl);
}
