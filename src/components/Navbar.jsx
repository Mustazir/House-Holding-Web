import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-10">
      <div className="container">
        <div className="flex justify-between items-center"> 
          <h1>Shanta</h1>
          <div>
            <GiHamburgerMenu className="text-3xl cursor-pointer" >

            </GiHamburgerMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
