import React from "react";
import Logo from "../Assets/Logo.png";

export default function LogIn() {
  return (
    <div>
      <h1>StockMate</h1>
      <img style={{ height: "100px" }} src={Logo} alt="Bull" />
      <h2>Log In</h2>
      <form>
        <input type="text" placeholder="UserName"></input>
        <input type="text" placeholder="Password"></input>
        <button>Log In</button>
      </form>
    </div>
  );
}
