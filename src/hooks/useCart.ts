import { useReducer } from "react";
import type { Book } from "@/lib/books";

type CartItem = {
  item: Book;
  quantity: number;
};

type Cart = {
  cartItems: CartItem[];
};

type CartAction = {
  type: "addToCart";
  payload: Book;
};

export function useCart() {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return {
    // addToCart: (book: Book) => { /* todo: implement this */ }
    cartItems: state.cartItems,
  };
}

export const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "addToCart": {
      // todo: implement this
    }
    default: {
      return state;
    }
  }
};
