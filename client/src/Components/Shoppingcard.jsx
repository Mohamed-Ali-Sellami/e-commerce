import React, { useEffect, useState } from "react";
import "./Shoppingcard.css";
import image from "./images/Banniere.png";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseCart, getTotals, removeFromCart } from "../Redux/cartSlice";
import { addorder } from "../Redux/orderSlice";
import { useNavigate } from "react-router-dom";
const Shoppingcard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelAddtorder = (neworder) => {
    dispatch(addorder(neworder));
    navigate("/");
  };

  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (store) => store.Cart
  );
  console.log("prix total",cartTotalAmount);
  const orders = useSelector((store) => store.Order?.orders);
  console.log("voici les order", orders);
  const handeldecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handelremovefromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const [neworder, setneworder] = useState({
    orderItems: [cartItems],
    totalPrice: `${cartTotalAmount}`,
    isDelivered: "pending",
  });

  return (
    <div className="content-shoppingcard">
      <h1>Shopping Card</h1>
      <div>
        <div className="shopping-cart">
          {cartItems?.map(
            (
              data //cartitems fiha les listes produits mistokin dans localstorage
            ) => (
              <div className="cart-item">
                <img src={data.Image} className="item-image" />
                <div className="item-details">
                  <span className="item-name">{data.name}</span>
                  <span className="item-number">{data.id}</span>
                </div>

                <div className="item-quantity">
                  <button onClick={() => handeldecreaseCart(data)}>-</button>

                  <span>{cartTotalQuantity}</span>

                  <button>+</button>
                </div>

                <span className="item-price">{data.price} TND</span>
                <button
                  onClick={() => handelremovefromCart(data)}
                  className="remove-item"
                >
                  ×
                </button>
              </div>
            )
          )}

          <div className="cart-footer">
            <button className="continue-shopping">
              {" "}
              <i class="fa-solid fa-rotate-left"></i> Continue Shopping
            </button>
            <span className="subtotal">Total: {cartTotalAmount} TND</span>
          </div>
          <button
            onClick={() => (handelAddtorder(neworder),dispatch(clearCart()))}
            className="btnconfirme"
          >
            Confirmer la Comande
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shoppingcard;
