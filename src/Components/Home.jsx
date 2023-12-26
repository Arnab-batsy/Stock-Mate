import React from "react";
import StockDetails from "./StockDetails";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export default function Home(){
    return <div>
    <AccountCircleIcon className="acc-icon"/>
    <h1>StockMate</h1>
    <SearchIcon className="home-search"/>
    <input className="home-input" placeholder="Search"></input>
    
    <div className="home-div">
        <StockDetails/>
        <StockDetails/>
        <StockDetails/>
    </div>
    </div>
}