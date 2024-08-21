import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Smartphones from './Components/Smartphones';
import Pcs from './Components/Pcs';
import Accessoires from './Components/Accessoires';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shoppingcard from './Components/Shoppingcard';
import { useDispatch } from 'react-redux';
import { getproduct } from './Redux/ProductsSlice';
import { useEffect } from 'react';
import { getTotals, removeFromCart } from './Redux/cartSlice';
import { getorder } from './Redux/orderSlice';

function App() {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  useEffect(() => {
 dispatch(getproduct())
 dispatch(getTotals())
 dispatch(getorder())
 


  }, [dispatch])
  
  return (
    <div className="App">
           <Navbar/>
      <Routes>

<Route path="/" element={<Home />} />
<Route path="/smartphones" element={<Smartphones/>} />
<Route path="/pcs"element={<Pcs/>} />
<Route path="/accessoires"element={<Accessoires/>} />

<Route path="/shoppingcard"element={<Shoppingcard/>} />



      </Routes>


    </div>
  );
}

export default App;
