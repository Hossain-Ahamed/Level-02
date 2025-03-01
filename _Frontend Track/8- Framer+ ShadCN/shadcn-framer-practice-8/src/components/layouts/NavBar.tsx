
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { fixedValues } from "@/assets/data";
import { motion } from 'motion/react';

const NavBar = () => {
  return (
    <motion.header className="h-16 w-full fixed z-[9999]"
    initial={{opacity :0}}
    animate={{opacity :1}}
    transition={{delay : 1 , duration : 1}}
    >
      <nav className="h-full w-full mx-auto max-w-[1240px] flex justify-between items-center px-5 bg-transparent">
        <span className="text-3xl ">{fixedValues.COMPANY_NAME}</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default NavBar;
