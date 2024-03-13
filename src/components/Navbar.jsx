import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import { items } from "./Data";
import Cart from "./Cart";
import { FaBeer } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ setData, cart }) => {
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
          <Link to="/">
            <p className="btn btn-ghost text-xl">Products</p>
          </Link>
        </div>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search Products"
            className="input input-bordered w-40 md:w-auto"
          />
        </div>
        <div>
          <Link to="/cart">
            <button className="btn">
              <FaCartArrowDown className="font-medium text-2xl"></FaCartArrowDown>
              <div className="badge badge-secondary">{cart.length}</div>
            </button>
          </Link>
        </div>
        <Link to="/login">
          <button className="btn btn-outline w-28 text-lg">Login</button>
        </Link>
      </div>
      <div className="grid grid-cols-9 mt-16">
        <button className="btn btn-outline btn-success" onClick={resetFilter}>No filter</button>
        <button className="btn btn-outline btn-success">Filter-By:</button>
        <button className="btn btn-outline btn-success" onClick={() => filterByCategory("smartphones")}>
          smartphones
        </button>
        <button className="btn btn-outline btn-success" onClick={() => filterByCategory("laptops")}>laptops</button>
        <button className="btn btn-outline btn-success" onClick={() => filterByCategory("fragrances")}>
          fragrances
        </button>
        <button
          className="btn btn-outline btn-success"
          onClick={() => filterByCategory("skincare")}
        >
          skincare
        </button>
        <button className="btn btn-outline btn-success" onClick={() => filterByCategory("groceries")}>groceries</button>
        {/* <button onClick={()=>filterByCategory('home-decoration')}>home-decoration</button> */}
        <button className="btn btn-outline btn-success" onClick={() => filterByPrice(1000)}>{">1000"}$</button>
        <button className="btn btn-outline btn-success" onClick={filterMultiplePriceCondition}>{">50 && <500"}$</button>
      </div>
    </div>
  );
};

export default Navbar;
