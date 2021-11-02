import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  /* 
  a way to keep the logic on the reducer and store data after every change on the cart
  We face one problem when using useEffect the way we currently do it: It will execute when our app starts.
  Why is this an issue?
  It's a problem because this will send the initial (i.e. empty) cart to our backend and overwrite any data stored there.
  */
  useEffect(() => {
    fetch("https://react-http-2df70-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
