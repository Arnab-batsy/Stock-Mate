import React from "react";
import Profile from "../Assets/prifile.jpeg"
import StockDetails from "./StockDetails";

export default function WishList(){
return <div>
    <h1>StockMate</h1>
      <img style={{ height: "150px", borderRadius:"100%" }} src={Profile} alt="Profile" />
      <p>UserName</p>
      <div className="home-div">
      <h3>Wish-listed stocks</h3>
        <StockDetails/>
        <StockDetails/>
        <StockDetails/>
    </div>
      </div>
}