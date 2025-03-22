import { Link } from 'react-router-dom';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

//const NavbarList: React.FC<{ isNavBarOpen: boolean }> = ({ isNavBarOpen }) => {

const NavbarList: React.FC = () => {
  return (
    <div className='flex gap-4 mr-4 font-semibold'>
      <div className='text-black/60 data-[active]:text-black data-[focus]:text-black data-[hover]:text-black'>
        <Link
          className='text-black/60 focus:outline-none data-[active]:text-black data-[focus]:text-black data-[hover]:text-black'
          to='/'
        >
          Home
        </Link>
      </div>
      <Popover className='relative'>
        <PopoverButton className='text-black/60 focus:outline-none data-[active]:text-black'>
          Projects
        </PopoverButton>
        <PopoverPanel
          transition
          anchor='bottom'
          className='flex flex-col ml-4 mt-1 p-2 rounded-xl bg-black/5 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0'
        >
          <a href='/analytics'>Analytics</a>
          <a href='/engagement'>Engagement</a>
          <a href='/security'>Security</a>
          <a href='/integrations'>Integrations</a>
        </PopoverPanel>
      </Popover>
      <Popover className='relative'>
        <PopoverButton>About us</PopoverButton>
      </Popover>
    </div>
  );
};

export default NavbarList;
