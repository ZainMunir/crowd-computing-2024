import React, { useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Instructions from './Instructions'

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
    <div className="bg-vibrantOrange grid grid-cols-[2fr_1fr] overflow-x-hidden">
      <ThemeProvider theme={customTheme}>
        <div className={`${
            startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
          }`}> 
          Application
        </div>
        <div className={`bg-warmWhite transform transition-transform duration-500 ${
            startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
          }`}>
            <Instructions onStartTask={() => setStartTask(true)} />
        </div>
      </ThemeProvider>
  </div>
  );
};

export default Container;
