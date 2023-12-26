import React from "react";
import Logo from "../Assets/Logo.png"

export default function Onboarding(){
    return <div>
    <div>
        <h1 className="onb-heading">StockMate</h1>
        <img className="onb-img" src={Logo} alt="Bull"/>
        <p className="onb-p">Trouble no more when finding Stocks.</p>
        </div>
        <form className="onb-form">
        <button type="submit">Log In</button>
        <button type="submit">Sign Up</button>
        </form>
    </div>
}