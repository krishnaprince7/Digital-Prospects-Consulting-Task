import React, { useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5"; 
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] z-50 flex justify-between items-center px-10 bg-[#FFFFFF] text-[#233A41]'>
      {/* Logo */}
      <div className='flex gap-2'>
        <img src="/images/Vector.png" alt='Logo Image' style={{ width: '30px' }} />
        <span className='text-[#340E0E] text-[17px] relative top-1 font-bold'>Logoipsum</span>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-6'>
        <li>
          <Link className='relative top-2' to="ourclient" spy smooth duration={1200}>Software Team</Link>
        </li>
        <li>
          <Link className='relative top-2' to="services" spy smooth duration={1200}>Services</Link>
        </li>
        <li>
          <Link className='relative top-2' to="technolohy" spy smooth offset={-70} duration={1200}>Technologies</Link>
        </li>
        <li>
          <Link className='relative top-2' to="resources" spy smooth offset={-150} duration={1200}>Resources</Link>
        </li>
        <li>
          <Link className='relative top-2' to="company" spy smooth offset={-90} duration={1200}>Company</Link>
        </li>
        <li>
          <div className='flex gap-2 border-2 border-green-400 px-4 py-2 rounded-md'>
            <Link to="getinTouch" spy smooth offset={-90} duration={1200}>Get in Touch</Link>
            <div className='relative top-[3px]'>
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <RiMenu3Line size={35}/> : <IoClose size={35} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'absolute top-0 left-[100%] transition-all ease-in-out duration-700 w-full h-screen bg-white flex flex-col justify-center items-center'
            : 'absolute top-0 left-0 w-full transition-all ease-in-out duration-700 h-screen bg-white flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link to="ourclient" spy smooth duration={1200} onClick={handleClick}>Software Team</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="services" spy smooth duration={1200} onClick={handleClick}>Services</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="technolohy" spy smooth offset={-70} duration={1200} onClick={handleClick}>Technologies</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="resources" spy smooth offset={-150} duration={1200} onClick={handleClick}>Resources</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="company" spy smooth offset={-90} duration={1200} onClick={handleClick}>Company</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="getinTouch" spy smooth offset={-90} duration={1200} onClick={handleClick}>Get in Touch</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
