import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans">
      <main className="flex w-full flex-grow overflow-y-auto bg-vibrantOrange">
        {/* These 2 divs are just for the background, such that it wont affect the layout grid */}
        <div className="flex w-full flex-grow bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%22%20viewBox%3D%220%200%20300%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2C50%20Q30%2C20%2060%2C40%20T120%2C50%20Q150%2C60%20180%2C40%20T240%2C50%20Q270%2C60%20300%2C50%22%20stroke%3D%22white%22%20stroke-width%3D%2220%22%20fill%3D%22transparent%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate%2820%2C150%2C50%29%22%2F%3E%3Cpath%20d%3D%22M0%2C50%20Q40%2C40%2080%2C50%20Q120%2C60%20160%2C50%22%20stroke%3D%22white%22%20stroke-width%3D%2220%22%20fill%3D%22transparent%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate%2820%2C150%2C50%29%22%2F%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2275%22%20r%3D%224%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E')] bg-cover bg-center bg-no-repeat">
          <div className="pointer-events-none absolute inset-0 bg-black opacity-35" />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
