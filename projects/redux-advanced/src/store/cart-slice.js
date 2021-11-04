import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "../store/ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      debugger;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    }
  }
});

/*
An action is simply an object that has two things: a type, and a payload. 
An action creator is simply a function, that just returns an action.  But in this case, 
sendCartData is a custom action creator that returns another function (thunk) and Redux Toolkit
can handle it.
What we dispatched before, always were action creators (functions that return an action object).
Now in cart slice, we are instead dispatching a function that returns another function.
But the great thing about Redux, when using Redux toolkit, is that it's prepared for that.
It does not just accept action objects with a type property.  Instead it also does accept,
action creators that return functions.  And if it sees, that you're dispatching, an action which is actually a function,
instead of action object, it will execute that function for you.
*/

export const sendCartData = (cart) => {
  // Redux automatically passes this dispatch argument when you are working with action creators
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!"
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-2df70-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!"
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!"
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
