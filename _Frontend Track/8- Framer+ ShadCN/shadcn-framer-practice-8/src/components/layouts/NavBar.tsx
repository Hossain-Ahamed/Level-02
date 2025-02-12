import React from "react";
import { NavLink } from "react-router";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <header className="bg-green-500 h-16">
      <nav className="bg-red-400 mx-auto max-w-[1200px] ">
        <span>Tech n talk BD</span>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
