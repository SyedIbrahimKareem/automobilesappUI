import React from "react";
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
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;