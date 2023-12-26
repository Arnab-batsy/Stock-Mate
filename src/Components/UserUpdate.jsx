import React from "react";
import Profile from "../Assets/prifile.jpeg"

function UserUpdate(){
return <div>
    <h1>StockMate</h1>
      <img style={{ height: "150px", borderRadius:"100%" }} src={Profile} alt="Profile" />
      <div className="user-div" style={{marginTop:"10px", marginBottom:"20px"}}>
    <div className="pro-details"><input className="user-update-input" placeholder="First Name"></input></div>
    <div className="pro-details"><input className="user-update-input" placeholder="Last Name"/></div>
    <div className="pro-details"><input className="user-update-input" placeholder="Email"/></div>
    <div className="pro-details"><input className="user-update-input" placeholder="Password"/></div>
    </div>
    <form className="onb-form">
    <button>Save</button>
    </form>
</div>
}
export default UserUpdate;