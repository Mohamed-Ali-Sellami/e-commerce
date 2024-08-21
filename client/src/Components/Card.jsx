import React from "react";
import "./card.css";
import { addToCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelAddtOCart = (product) => {
    dispatch(addToCart(product));
    navigate("/shoppingcard");
  };

  return (
    <div className="box-card">
      <div className="box-image">
        <p>new</p>
        <img src={data?.Image} alt="produitimage" />
      </div>
      <div className="info-card">
        <h2>{data?.name}</h2>
        <p>{data?.description}</p>
        <div className="button-card">
          <p> {data?.price} TND</p>
          <i onClick={() => handelAddtOCart(data)} class="fa-solid fa-cart-plus"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* // <div className='box-card'>

    // <img src={data.image }alt='produitimage'/>  
    
    // <div className='box-content'>
      
    // <h1> {data.name}</h1>
    // <p> {data.description} </p>
    // <p> {data.Price} </p>

    // <div className='rate-btn'>
    // <button>show more</button>
    // </div>

    // </div>

    // </div> */
}
