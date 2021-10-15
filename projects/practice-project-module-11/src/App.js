import React from "react";
import Cart from "./Components/Cart/Cart.js";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals.js";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
