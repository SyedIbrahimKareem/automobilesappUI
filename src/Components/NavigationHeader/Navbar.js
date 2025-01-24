import React from "react";
import './Navbar.css'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
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
                    <NavLink to="/Products" activeStyle>
                        Products
                    </NavLink>
                    {/* <NavLink to="/LoginSignUp" activeStyle>
                        Login / Register
                    </NavLink> */}
                    {/* Second Nav */}
                    <NavBtnLink to='/LoginSignUp'>Login / Sign Up</NavBtnLink>
                    <div className="navbar-right">
                        <a href="/cart" className="cart-icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                            <span className="cart-count">2</span>
                        </a>
                        <a href="/account" className="user-icon">
                        <i class="fa-solid fa-user"></i>
                        </a>
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;