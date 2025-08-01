import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import "./Header.css";

function Header() {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
