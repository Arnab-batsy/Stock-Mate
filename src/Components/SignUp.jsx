import React from "react";
import Logo from "../Assets/Logo.png"

export default function SignUp(){
    return <div>
        <h1>StockMate</h1>
        <img style={{height: "100px"}} src={Logo} alt="Bull"/>
        <h2>Register</h2>
        <form>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="text" placeholder="UserName"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Password"></input>
            <button>SignUp</button>
        </form>
    </div>
}