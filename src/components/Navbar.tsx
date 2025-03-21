import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/icons/logoColor.png';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='text-black flex justify-between items-center max-w-[1300px] mx-auto h-24'>
      <a className='ml-4 max-w-[100px]' href=''>
        <img src={logo} alt='' />
      </a>
      <ul className='hidden md:flex font-semibold'>
        <li className='p-5'>
          <Link to='home' smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className='p-5'>
          <Link to='projects' smooth={true} offset={50} duration={500}>
            Projects
          </Link>
        </li>
        <li className='p-5'>
          <Link to='about' smooth={true} offset={50} duration={500}>
            About us
          </Link>
        </li>
      </ul>
      <div className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};
export default Navbar;
