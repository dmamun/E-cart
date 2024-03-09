import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
    console.log(cart)
    const totalPrice = cart.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
      console.log(totalPrice);
      const totalDiscountPrice = cart.reduce((accumulator, item) => {
        
        const discountedPrice = item.price ? item.price * 0.5 : item.price;
        return accumulator + discountedPrice;
    }, 0);  
  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <Link to="/" className="btn btn-active btn-link">
            Keep shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {cart.map((item) => (
            <div key={item.id}>
              <div className="card w-auto h-auto bg-base-100 shadow-xl">
                <figure>
                  <img src={item.chobi} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">
                      Total Price: {item.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <p>Your Total Price is :{totalPrice}Taka</p>
        <p>Discount price of 50%:{totalDiscountPrice}Taka</p>
        {cart.length !== 0 && (
          <div className="flex justify-center gap-3 mt-4 mb-4">
            <p className="btn btn-md">checkOut</p>
            <p className="btn btn-outline btn-error" onClick={()=>setCart([])}> clear cart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
