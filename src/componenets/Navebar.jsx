  import React, { useState } from 'react';
  import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa';
  import { MdOutlineArrowOutward } from "react-icons/md";

  import { RiMenu3Line } from "react-icons/ri";
  import { IoClose } from "react-icons/io5"; 
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';

  import { Link } from 'react-scroll';

  const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
      <div className='fixed w-full h-[80px] z-50 flex justify-between items-center px-10 bg-[#FFFFFF] text-[#233A41]'>
        <div className='flex gap-2'>
          <img src="/images/Vector.png" alt='Logo Image' style={{ width: '30px' }} />
          <span className='text-[#340E0E] text-[17px] relative top-1 font-bold'>Logoipsum</span>
        </div>

        <ul className='hidden md:flex'>
          <li >
          <Link className='relative top-2'   to="ourclient" spy={true}  smooth={true} offset={0} duration={1200}>Software Team</Link>
          </li>
          <li>
          <Link className='relative top-2'  to="services" spy={true}  smooth={true} offset={0} duration={1200}>Services</Link>
          </li>
          <li>
          <Link className='relative top-2'  to="technolohy" spy={true}  smooth={true} offset={-70} duration={1200}>Technologies</Link>
          </li>
          <li>
          <Link className='relative top-2'  to="resources" spy={true}  smooth={true} offset={-150} duration={1200}>Resources</Link>
          </li>
          <li>
          <Link className='relative top-2'  to="company" spy={true}  smooth={true} offset={-90} duration={1200}>Company</Link>
          </li>
          <li >
          <div className='flex gap-2  border-2 border-green-400 px-4 py-2 rounded-md '>
          <Link className=''   to="getinTouch" spy={true}  smooth={true} offset={-90} duration={1200}>Get in Touch</Link>

  <div className='relative top-[3px]'>
        <MdOutlineArrowOutward />

  </div>

          </div>
          </li>
        </ul>

  
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
          {!nav ? <RiMenu3Line size={35}/> : <IoClose size={35} />}
        </div>


        <ul
          className={
            !nav
              ? 'absolute top-0 left-[35cm] transition-all ease-in-out duration-[2s] w-full h-screen bg-white flex flex-col justify-center items-center '
              : 'absolute top-0 left-0 w-full transition-all ease-in-out duration-1000 h-screen bg-white flex flex-col justify-center items-center '
          }
        >
          <li className='py-6 text-4xl'>
              <Link className='relative top-2'   to="home" spy={true}  smooth={true} offset={0} duration={1200}>Software Team</Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
                <Link className='relative top-2'  to="about" spy={true}  smooth={true} offset={0} duration={1200}>Services</Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
          <Link className='relative top-2'  to="skils" spy={true}  smooth={true} offset={-70} duration={1200}>Technologies</Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
               <Link className='relative top-2'  to="project" spy={true}  smooth={true} offset={-150} duration={1200}>Resources</Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
                <Link className='relative top-2'  to="contact" spy={true}  smooth={true} offset={-90} duration={1200}>Company</Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
                     <Link className=''   to="contact" spy={true}  smooth={true} offset={-90} duration={1200}>Get in Touch</Link>


          </li>
        </ul>

      
        
      </div>
    );
  };

  export default Navbar;