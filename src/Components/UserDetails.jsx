import React from "react";
import Profile from "../Assets/prifile.jpeg"

function UserDetails(){
return <div>
    <h1>StockMate</h1>
      <img style={{ height: "150px", borderRadius:"100%" }} src={Profile} alt="Profile" />
      <div className="user-div" style={{marginTop:"10px", marginBottom:"20px"}}>
    <div className="pro-details"><p className="user-det">First Name</p></div>
    <div className="pro-details"><p className="user-det">Last Name</p></div>
    <div className="pro-details"><p className="user-det">User Name</p></div>
    <div className="pro-details"><p className="user-det">Email</p></div>
    <div className="pro-details"><p className="user-det">Password</p></div>
    </div>
    <form className="onb-form">
    <button>Edit Details</button>
    <button>Logout</button>
    </form>
</div>
}
export default UserDetails;