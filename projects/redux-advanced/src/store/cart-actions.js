import { uiActions } from "../store/ui-slice";
import { cartActions } from "./cart-slice";

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
          message: error.message
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-2df70-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          // to avoid error when user empty cart
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!"
        })
      );
    }
  };
};
