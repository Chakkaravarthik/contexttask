import { CartProvider } from "./assets/context"
import CartItem from "./Cart/cartcomponent"




function App() {
  return (
    <>
      <CartProvider>
        <div>
          <h1>My Cart</h1>
          <CartItem />
        </div>
      </CartProvider>
    </>
  )
}

export default App
