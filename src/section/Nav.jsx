import React from "react";
import Nike from "../section/Nike.png";
import Images from "../section/Images.png";

function Nav() {
  return (
    <header className="padding-x w-full py-2 absolute z-10  -mt-5 ">
      <nav className="flex items-center max-container ">
        <a href="/">
          <img src={Nike} alt="" width={130} height={29} />
        </a>
        <ul className="flex justify-center items-center gap-16 flex-1 max-lg:hidden ">
          <li>
            <a className=" font-montserrat text-slate-500 text-lg ">Home</a>
          </li>
          <li>
            <a className=" font-montserrat text-slate-500 text-slate-gray text-lg ">
              About Us
            </a>
          </li>
          <li>
            <a className=" font-montserrat text-slate-500 text-slate-gray text-lg ">
              Products
            </a>
          </li>
          <li>
            <a className=" font-montserrat text-slate-500 text-slate-gray text-lg ">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={Images} alt="" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
