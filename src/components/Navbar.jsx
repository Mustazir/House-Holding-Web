import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "./Shared/HamburgerMenu";

const Navbar = () => {
  return (
    <>
   <nav className="flex justify-between mx-auto items-center w-[90%] p-4 shadow-md">
    <div>Shanta Holdings</div>
    <div>
      <HamburgerMenu></HamburgerMenu>
    </div>
   </nav>
   </>
  );
};

export default Navbar;
