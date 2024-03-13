import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      const user=await signInWithEmailAndPassword(auth,email,password);
      console.log(user)
      if(user.length!=0){
        alert("You have Login successfully!!");
      }
      
    } catch (error) {
      console.log(error);
      
    }

  }
  const handleGoogle=async(e)=>{
    e.preventDefault();
    try {
      const provider=new GoogleAuthProvider();
      const user=await signInWithPopup(auth,provider);
      console.log(user);
      
    } catch (error) {
      console.log(error);
      
    }


  }
  return (
    <div>
      <form onSubmit={handleLogin} action="#" method="post">
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="enter email here"
            id="email"
            name="email"
            className="mt-1 p-2 w-1/2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="enter password here"
            id="password"
            name="password"
            className="mt-1 p-2 w-1/2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 w-32 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <div>
          <Link className="btn btn-active btn-link" to="/register">
            New user?Plz register
          </Link>
          <div onClick={handleGoogle} className="flex justify-center items-center">
            <img className="w-14" src="data:image/png;base64,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">

            </img>
            <p>Login With Google</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
