// https://tailwindcss.com/docs/styling-with-utility-classes

import React from 'react';

const Card: React.FC = () => {
  return (
    <div className='mx-auto bg-yellow-200 flex max-w-sm items-center gap-x-4 rounded-xl p6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'>
      teste
    </div>
  );
};

export default Card;
