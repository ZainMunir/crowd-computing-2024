import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Instructions from './Instructions';
import Question from './Question';
import CloneLayout from './Clone/CloneLayout';

const Container = () => {
  const [startTask, setStartTask] = useState(true);

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#004F59',
        contrastText: '#FFFFFF',
      },
    },
  });

  return (
    <div className="grid w-full grid-cols-[2fr_1fr] h-screen">
      <ThemeProvider theme={customTheme}>
        <div
          className={`${
            startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
          } h-full overflow-y-auto`}
        >
          <CloneLayout />
        </div>
        <div
          className={`transform bg-warmWhite px-[2rem] py-[1rem] font-quicksand transition-transform duration-500 ${
            startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
          }`}
        >
          <div className="w-full z-50">
            {!startTask ? (
              <Instructions onStartTask={() => setStartTask(true)} />
            ) : (
              <Question />
            )}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Container;