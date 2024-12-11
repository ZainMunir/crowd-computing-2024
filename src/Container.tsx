import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Instructions from './Instructions';
import Question from './Question';
import CloneLayout from './Clone/CloneLayout';
import CloneContext, { EnabledElements, Styling } from './utils/CloneContext';
import { defaultEnabledElements, defaultStyling } from './utils/defaults';

const Container = () => {
  const [startTask, setStartTask] = useState(true);
  const [enabledElements, setEnabledElements] = useState<EnabledElements>(
    defaultEnabledElements,
  );
  const [styling, setStyling] = useState<Styling>(defaultStyling);

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#004F59',
        contrastText: '#FFFFFF',
      },
    },
  });

  return (
    <div className="grid h-screen w-full grid-cols-[2fr_1fr]">
      <ThemeProvider theme={customTheme}>
        <div
          className={`${
            startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
          } h-full overflow-y-auto`}
        >
          <CloneContext.Provider value={{ enabledElements, styling }}>
            <CloneLayout />
          </CloneContext.Provider>
        </div>
        <div
          className={`transform bg-warmWhite px-[2rem] py-[1rem] font-quicksand transition-transform duration-500 ${
            startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
          }`}
        >
          <div className="z-50 w-full">
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
