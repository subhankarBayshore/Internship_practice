import { useState } from "react";
import Header from "./Components/Header/Header"
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Header/Cart";
import SignIn from "./Components/Header/SignIn";
import CartProvider from "./Store/CartProvider";   // for context use, but we can do same task using passing props also

function App() {

  const [cart,setCart]=useState(false);
  const [signIn,setSignIn]=useState(false);
  const [value,setValue]=useState("");

//  console.log(value);

  let showSignIn=()=>{
    setSignIn(true);
  }

  let hideSignIn=()=>{
    setSignIn(false);
  }

  let showCart=()=>{
    setCart(true);
  }

  let hideCart=()=>{
    setCart(false);
  }

  return (
    <CartProvider>      
      { signIn && <SignIn onHideCart={hideSignIn} appProps={setValue}/>}
      { value && cart ? ( <Cart onHideCart={hideCart}/>): null}       
      <Header onShowCart={showCart} onSignIn={showSignIn}/>
      <main>
        <Meals />
      </main>     
    </CartProvider>
  );
}

export default App;
