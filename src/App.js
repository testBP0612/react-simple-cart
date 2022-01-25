import { useState, useContext } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";

import CartProvider from "./store/CartProvider";
import AuthContext from "./store/auth-context";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx = useContext(AuthContext);

  const handleShowCart = () => {
    setCartIsShown(true);
  };

  const handleHideCart = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        {authCtx.isLoggedIn && <Meals />}
        {!authCtx.isLoggedIn && <Login />}
      </main>
    </CartProvider>
  );
}

export default App;
