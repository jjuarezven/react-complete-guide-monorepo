import React, { useReducer } from "react";
import CartContext from "./cart-context.js";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
    /* if (defaultCartState.items.find((item) =>{
            return item.id === action.item.id;
        })) {
            
        } */
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [carState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "remove", id });
  };

  const cartContext = {
    items: carState.items,
    totalAmount: carState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
