import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "./Shared/HamburgerMenu";

const Navbar = () => {
  return (
    <>
   <nav className="flex justify-between mx-auto items-center w-[90%] p-7 shadow-md">
    <div className="text-4xl">Shanta Holdings</div>
    <div className="">
      <HamburgerMenu></HamburgerMenu>
    </div>
   </nav>
   </>
  );
};

export default Navbar;
