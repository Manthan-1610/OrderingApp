import './App.css';
import HomeScreen from './Components/HomeScreen';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart.js';
import { CartProvider } from 'react-use-cart';  

function Main() {
  return (
    <div className="App">
      <CartProvider>
      <Navbar/>
      <HomeScreen/>
      <Cart/>
      </CartProvider>
    </div>
  );
}

export default Main;
