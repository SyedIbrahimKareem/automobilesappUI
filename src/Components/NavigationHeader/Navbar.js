import {React, useState} from "react";
import './Navbar.css'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

function Navbar () {
      let setLoginName="Login / Sign Up";
      let LoginName="Login / Sign Up";
      if(localStorage.getItem("token")!=""){
        setLoginName=localStorage.getItem("Username");
        LoginName=setLoginName;
      }
      else{
        setLoginName="Login / Sign Up";
        LoginName=setLoginName;
      }
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Home" >
                        Home
                    </NavLink>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/Products/ProductListing" activeStyle>
                        Products
                    </NavLink>
                    {/* <NavLink to="/LoginSignUp" activeStyle>
                        Login / Register
                    </NavLink> */}
                    {/* Second Nav */}
                    <NavBtnLink id="LoginSignupID" to='/LoginSignUp' value={LoginName}>{LoginName}</NavBtnLink>
                    <div className="navbar-right">
                        <NavBtn>
                        <a href="/cart" className="cart-icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                            <span className="cart-count">2</span>
                        </a>
                        <a href="/account" className="user-icon">
                        <i class="fa-solid fa-user"></i>
                        </a>
                        </NavBtn>
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;