"use client";
import { Product } from "@consumer/app/_actions/fetch-offers";
import React, { createContext, useState, useContext, ReactNode } from "react";

// export interface Cart {
//   products: Product[]
// }

// export interface ProductCart {
//   name: string;
//   price: number;
//   pricing: string;
//   quantity: number;
// }

interface CartContextProps {
  cart: Product[];
  setCart: (cart: Product[]) => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartProvider() {
  return useContext(CartContext);
}
