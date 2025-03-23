import React, { ReactNode } from 'react';

const Box: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className='flex flex-col m-2 mx-auto max-w-sm items-start gap-x-4 rounded-xl bg-white p-6 shadow-lg 
        outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'
    >
      {children}
    </div>
  );
};

export default Box;
