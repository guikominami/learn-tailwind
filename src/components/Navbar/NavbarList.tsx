import React from 'react';
import { Link } from 'react-scroll';

//const NavbarList: React.FC<{ isNavBarOpen: boolean }> = ({ isNavBarOpen }) => {

const NavbarList: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <ul
      className={
        !isMobile
          ? 'hidden md:flex font-semibold'
          : 'font-semibold text-2xl ml-2 mt-20'
      }
    >
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
  );
};

export default NavbarList;
