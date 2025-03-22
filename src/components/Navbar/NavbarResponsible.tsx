import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/icons/logoColor.png';
import NavbarList from './NavbarItems';

const NavbarResponsible: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='text-black flex justify-between items-center max-w-[1300px] mx-auto h-24'>
      <a className='ml-4 max-w-[100px]' href=''>
        <img src={logo} alt='' />
      </a>
      <NavbarList isMobile={false} />
      <div onClick={handleNav} className='block md:hidden mr-6'>
        {isNavOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          isNavOpen
            ? 'z-10 text-black fixed h-full left-0 top-20 w-[100%] border-r ease-in-out duration-500 bg-white/40'
            : 'fixed left-[-100%]'
        }
      >
        <NavbarList isMobile={true} />
      </div>
    </div>
  );
};
export default NavbarResponsible;
