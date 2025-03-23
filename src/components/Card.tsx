// https://tailwindcss.com/docs/styling-with-utility-classes
import React from 'react';
import logoReact from '../assets/icons/logoColor.png';

const Card: React.FC = () => {
  return (
    <div
      className='mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg 
      outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'
    >
      <img src={logoReact} className='w-20.5 shrink-0' alt='logo react' />
      <div>
        <div className='text-xl font-medium text-black dark:text-white'>
          Chit Chat
        </div>
        <p className='text-gray-500 dark:text-gray-400'>You have a message</p>
      </div>
    </div>
  );
};

export default Card;
