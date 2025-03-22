import React from 'react';
import logo from '../../assets/icons/logoBlack.png';
import NavbarItems from './NavbarItems';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
  return (
    <div className='text-black flex justify-between items-center max-w-[1300px] mx-auto h-24'>
      <Link className='ml-6 max-w-[40px]' to='/'>
        <img
          src={logo}
          alt='logo com descrição MudaLab / logo with description MudaLab'
        />
      </Link>
      <NavbarItems />
    </div>
  );
};
export default Navbar;
