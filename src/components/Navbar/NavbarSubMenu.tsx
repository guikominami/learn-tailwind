import React from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';

interface Menu {
  title: string;
  subMenuItems: { title: string; url: string }[];
}

const NavbarSubMenu: React.FC<{ menu: Menu }> = ({ menu }) => {
  return (
    <Popover className='relative'>
      <PopoverButton className='text-black/60 capitalize focus:outline-none data-[active]:text-black'>
        {menu.title}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor='bottom end'
        className='flex flex-col border-none divide-y bg-black/2 divide-white mt-1 p-2 rounded-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0'
      >
        {menu.subMenuItems.map((item) => (
          <Link className='p-1' to={item.url}>
            {item.title}
          </Link>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default NavbarSubMenu;
