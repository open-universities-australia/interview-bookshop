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
    // addToCart: (book: Book) => { // What goes here? }
    cartItems: state.cartItems,
  };
}

const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "addToCart": {
      // what do we do here?
    }
    default: {
      return state;
    }
  }
};
