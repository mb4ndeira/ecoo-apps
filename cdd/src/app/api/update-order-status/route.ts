import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers"; 
import { ACTIONS } from "@shared/_actions";
import { ExceptionReturn } from "@shared/core/UseCase";


export async function PATCH(request: NextRequest){
  const { order_id, status, 
    _successUrl,
   } = await request.json();
  
   const successUrl = new URL(_successUrl, request.url);
    const result = await ACTIONS["update-order-status"].execute({
        order_id,
        status,
        });
    if (result instanceof ExceptionReturn) {
        throw new Error(result.message);
    }
    return NextResponse.redirect(successUrl);
}
