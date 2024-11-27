import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans">
      <main className="flex w-full flex-grow overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
