import './App.css';
import HomeScreen from './Components/HomeScreen';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart.js';
import { CartProvider } from 'react-use-cart';  
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Navbar/>
      <HomeScreen/>    
    </div>
  );
}

export default Main;
