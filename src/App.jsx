import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart"
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import { items } from "./components/Data";
import { useState } from "react";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";


function App() {
  const [data,setData]=useState([...items]);
  const [cart,setCart]=useState([]);
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData}></Navbar>
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} data={data}/>}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}></Route>
          <Route path="/products/:id" element={<ProductDetails cart={cart} setCart={setCart} data={data} />}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>

      </Router>
    </>
  );
}

export default App;
