import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification.js";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;
function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  /* 
  a way to keep the logic on the reducer and store data after every change on the cart
  We face one problem when using useEffect the way we currently do it: It will execute when our app starts.
  Why is this an issue?
  It's a problem because this will send the initial (i.e. empty) cart to our backend and overwrite any data stored there.
  To solve it, we use the isInitial variable
  */

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      const cleanCart = {
        items: cart.items,
        totalQuantity: cart.totalQuantity
      };
      dispatch(sendCartData(cleanCart));
    }
    /*
    OLD CODE, extracted to a new action creator (sendCartData) on cart-actions
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data"
        })
      );

      const response = await fetch(
        "https://react-http-2df70-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully"
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message
        })
      );
    });
    */
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
