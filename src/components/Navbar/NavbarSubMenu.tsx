import React from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';

const NavbarSubMenu: React.FC<{
  menuItem: string;
  menuSubItems: { title: string; url: string }[];
}> = ({ menuItem, menuSubItems }) => {
  return (
    <Popover className='relative'>
      <PopoverButton className='text-black/60 focus:outline-none data-[active]:text-black'>
        {menuItem}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor='bottom'
        className='flex flex-col mr-2 mt-1 p-2 rounded-xl bg-white outline-1 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0'
      >
        {menuSubItems.map((item) => (
          <Link className='capitalize m-1' to={item.url}>
            {item.title}
          </Link>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default NavbarSubMenu;
