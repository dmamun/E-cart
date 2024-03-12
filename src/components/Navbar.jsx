import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import { items } from "./Data";
import Cart from "./Cart";
import { FaBeer } from 'react-icons/fa'
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ setData,cart}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (parameter) => {
    const filterItems = items.filter((item) => item.category === parameter);
    setData(filterItems);
  };
  const resetFilter = () => {
    // Reset to the original items or implement your desired behavior
    setData(items);
  };
  const filterByPrice = (price) => {
    const filterPrice = items.filter((item) => item.price >= price);
    setData(filterPrice);
    // console.log(filterPrice);
  };
  const filterMultiplePriceCondition = () => {
    const filteredItems = items.filter(
      (item) => item.price > 50 && item.price < 500
    );
    setData(filteredItems);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.value;
    setSearchTerm(term);

    const filteredItems = items.filter((user) =>
      user.title.toLowerCase().includes(term.toLowerCase())
    );

    setData(filteredItems);
  };

  return (
    <div>
      <div className="grid grid-cols-4">
        <div>
          <Link to="/">Products</Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={handleSearch}
          ></input>
        </div>
        <div>
          <Link to="/cart">
            <button className="btn">
              <FaCartArrowDown className="font-medium text-2xl"></FaCartArrowDown>
              <div className="badge badge-secondary">{cart.length}</div>
            </button>
          </Link>
        </div>
        <Link to="/login">Login</Link>
      </div>
      <div className="grid grid-cols-9 mt-16">
        <button onClick={resetFilter}>No filter</button>
        <button>Filter-By:</button>
        <button onClick={() => filterByCategory("smartphones")}>
          smartphones
        </button>
        <button onClick={() => filterByCategory("laptops")}>laptops</button>
        <button onClick={() => filterByCategory("fragrances")}>
          fragrances
        </button>
        <button onClick={() => filterByCategory("skincare")}>skincare</button>
        <button onClick={() => filterByCategory("groceries")}>groceries</button>
        {/* <button onClick={()=>filterByCategory('home-decoration')}>home-decoration</button> */}
        <button onClick={() => filterByPrice(1000)}>{">1000"}$</button>
        <button onClick={filterMultiplePriceCondition}>{">50 && <500"}$</button>
      </div>
    </div>
  );
};

export default Navbar;
