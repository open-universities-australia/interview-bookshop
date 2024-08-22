import { cartReducer } from "./useCart";
import { books } from "@/lib/books";

describe("cartReducer", () => {
  it("should add a book to the cart when it is empty", () => {
    const [firstBook] = books;

    const result = cartReducer(
      { cartItems: [] },
      { type: "addToCart", payload: firstBook }
    );

    expect(result.cartItems).toEqual([{ item: firstBook, quantity: 1 }]);
  });

  it("should increment the quantity if the book is already in the cart", () => {
    const [firstBook] = books;

    const result = cartReducer(
      { cartItems: [{ item: firstBook, quantity: 1 }] },
      { type: "addToCart", payload: firstBook }
    );

    expect(result.cartItems).toEqual([{ item: firstBook, quantity: 2 }]);
  });

  it("should add a new book to the cart", () => {
    const [firstBook, secondBook] = books;

    const result = cartReducer(
      { cartItems: [{ item: firstBook, quantity: 1 }] },
      { type: "addToCart", payload: secondBook }
    );

    expect(result.cartItems).toEqual([
      { item: firstBook, quantity: 1 },
      { item: secondBook, quantity: 1 },
    ]);
  });
});
