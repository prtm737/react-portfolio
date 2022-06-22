import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";


export default function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4">
      <h1 className="w-full text-4xl font-bold text-[#4ADE80]">PRITOMPARASHAR.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
        
          <Link  to="Hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          
          <Link  to="About" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          
          <Link  to="Portfolio" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          
          <Link  to="Experience" spy={true} smooth={true} offset={-100} duration={500}>Experience</Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          
          <Link  to="Contact" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className=" cursor-pointer md:hidden">
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0f172a] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#4ADE80] m-8">
        PRITOMPARASHAR.
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-b-gray-600"><Link  to="Hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
          <li className="p-4 border-b border-b-gray-600"><Link  to="About" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
          <li className="p-4 border-b border-b-gray-600"><Link  to="Portfolio" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
          <li className="p-4 border-b border-b-gray-600"><Link  to="Experience" spy={true} smooth={true} offset={-100} duration={500}>Experience</Link></li>
          <li className="p-4"><Link  to="Contact" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
