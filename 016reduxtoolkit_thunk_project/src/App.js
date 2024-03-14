import { Products } from "./features/products/Products";
import {Cart} from './features/cart/Cart'
import {useEffect} from 'react'
import { fetchItemAsync } from "./features/cart/cartSlice";
function App() {
  // useEffect(()=>{fetchItemAsync()},[])
  return (
   <>
    
     <Cart></Cart>
      <Products></Products>
   </>
  );
}

export default App;
