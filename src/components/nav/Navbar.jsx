import React, { useContext, useState } from "react";

import "./Navbar.style";
import { Brand, Menu, MenuLink, Hamburger } from "./Navbar.style";
import Nav from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { LoginContext } from "../context/LoginContext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(LoginContext);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<MuratÇamurlu/>"}</i>
        <span>Recipe</span>
      </Brand>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">HOME</MenuLink>
        <MenuLink to="about">ABOUT</MenuLink>
        <MenuLink to="register">REGİSTER</MenuLink>
        {user.userName && user.password ? (
          <MenuLink
            onClick={() => setUser({ userName: "", password: "" })}
            to="login"
          >
            Logout
          </MenuLink>
        ) : (
          <MenuLink to="login">Login</MenuLink>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
