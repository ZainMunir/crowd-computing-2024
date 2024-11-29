import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Instructions from './Instructions';

const Container = () => {
  const [startTask, setStartTask] = useState(false);

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#004F59',
        contrastText: '#FFFFFF',
      },
    },
  });

  return (
    <div className="grid grid-cols-[2fr_1fr] overflow-x-hidden bg-no-repeat bg-cover bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%22%20viewBox%3D%220%200%20300%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2C50%20Q30%2C20%2060%2C40%20T120%2C50%20Q150%2C60%20180%2C40%20T240%2C50%20Q270%2C60%20300%2C50%22%20stroke%3D%22white%22%20stroke-width%3D%2220%22%20fill%3D%22transparent%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate%2820%2C150%2C50%29%22%2F%3E%3Cpath%20d%3D%22M0%2C50%20Q40%2C40%2080%2C50%20Q120%2C60%20160%2C50%22%20stroke%3D%22white%22%20stroke-width%3D%2220%22%20fill%3D%22transparent%22%20stroke-linecap%3D%22round%22%20transform%3D%22rotate%2820%2C150%2C50%29%22%2F%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2275%22%20r%3D%224%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E')] bg-center">
  <ThemeProvider theme={customTheme}>
    <div
      className={`${
        startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
      }`}
    >
      Application
    </div>
    <div
      className={`transform bg-warmWhite px-[2rem] py-[1rem] font-quicksand transition-transform duration-500 ${
        startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
      }`}
    >
      <Instructions onStartTask={() => setStartTask(true)} />
    </div>
  </ThemeProvider>
</div>

  );
};

export default Container;
