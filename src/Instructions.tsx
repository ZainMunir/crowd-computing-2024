import React, { useState} from 'react';
import { Button, Checkbox, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import wattpadLogo from './resources/Wattpad-logo.svg';

const Instructions = ({onStartTask}) => {
  const [isChecked, setIsChecked] = useState(false);
  function handleCheckboxChange() {
    setIsChecked(prevValue => !prevValue)
  }
  
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#004F59',
        contrastText: '#FFFFFF',
      },
    },
  });

  return (
        <div>
          <ThemeProvider theme={customTheme}>
          <img src={wattpadLogo} alt="Wattpad Logo" />

          <div className='justify-items-center'>
          <p className="text-vibrantOrange font-bold text-[40px] text-center px-10">
              Welcome to the Wattpad User Feedback Task!
          </p>

          <div className="px-20 pt-10 text-charcoalGrey">
              <p>
                This study is aimed on gaining insight on what areas of our application's chapter reading page can be
                improved for. During this task, we will only focus on the desktop view. By completing this, your
                insight will help make Wattpad more user-friendly and enjoyable for both readers and writers.
              </p>

              <List>
                <ListItem>
                  <ListItemText
                    primary="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  />
                </ListItem>
              </List>

              <div className="flex pt-20 pb-10">
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <div className="text-[12px]">
                  I have read and understood the instructions provided above, and I acknowledge the work I am expected
                  to complete.
                </div>
              </div>

              <Button
                variant="contained"
                color="primary"
                disabled={!isChecked}
                onClick={onStartTask}
              >
                Start task
              </Button>
            </div>
          </div>
          </ThemeProvider>  
        </div>
  );
};

export default Instructions;
