import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function Navbar() {
    const dispatch = useDispatch();
    const {cartTotalQuantity} = useSelector((state) => state.Cart);
    console.log(cartTotalQuantity)
    return(
    
    <div id="header">
            <div className="navbar">
                <div class="navbar-logo">
                    <a href="#home">  <h1><span className="logocaracter">TECH</span>SeL</h1> </a>  
                </div>
    
                <ul className="liste">
                 <Link to="/">   <li> Home </li>  </Link>
                   <Link to="/smartphones">  <li >Smartphones</li> </Link>
                   <Link to="/pcs"> <li> Pcs  </li> </Link>
                   <Link to="/accessoires"> <li> Accessoires  </li> </Link>
            
    
                </ul>
               <div className='icones-nav'>
                <i className="fa-regular fa-user"></i>

                 <div className='paniernav'>
                <Link to="/shoppingcard"> <i class="fa-solid fa-cart-shopping"></i>   </Link>
                <p className='quantity'>{cartTotalQuantity}</p>
                </div>
                </div>
            </div>
         
    
    </div>
    
    );
    }
    
    export default Navbar