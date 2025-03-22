import React, { ReactNode } from 'react';

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='h-screen bg-white p-8 flex flex-col items-center justify-center'>
      {children}
    </div>
  );
};

export default Container;
