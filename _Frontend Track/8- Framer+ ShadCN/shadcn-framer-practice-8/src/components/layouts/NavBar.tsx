
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { fixedValues } from "@/assets/data";

const NavBar = () => {
  return (
    <header className="h-16">
      <nav className="h-full mx-auto max-w-[1240px] flex justify-between items-center px-5 ">
        <span className="text-3xl ">{fixedValues.COMPANY_NAME}</span>
        <ul className="space-x-5">
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
