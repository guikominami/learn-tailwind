import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/icons/logoColor.png';

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
    </div>
  );
};
export default Navbar;
