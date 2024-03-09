import React from "react";

import { Link } from "react-router-dom";

const Products = ({data,cart,setCart}) => {

  const handleAddToCart=(idNumber,chobi,title,description,price)=>{
    const obj={
      idNumber,chobi,title,description,price
    }
    setCart([...cart,obj])
    console.log(obj)
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((item) => (
        <div key={item.id}>
          <div className="card w-full h-5/6 bg-base-100 shadow-xl">
            <figure>
              <img src={item.thumbnail} className="h-32 w-auto" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions grid grid-cols-2">
                <Link to={`/products/${item.id}`}>
                  <button className="btn btn-outline btn-info">
                    View Details
                  </button>
                </Link>

                <button onClick={()=>handleAddToCart(item.id,item.thumbnail,item.title,item.description,item.price)} className="btn btn-outline btn-success">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
