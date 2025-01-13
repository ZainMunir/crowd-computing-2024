import React, { useState } from 'react';
import { Button, Checkbox, MobileStepper } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import wattpadLogo from './resources/wattpad-logo.png';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

type Props = {
  onStartTask: () => void;
};

const Instructions = ({ onStartTask }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  function handleCheckboxChange() {
    setIsChecked((prevValue) => !prevValue);
  }

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#004F59',
        contrastText: '#FFFFFF',
      },
    },
  });
  const theme = useTheme();

  const instructions = [
    [ `We're on a mission to make reading on online platforms a more delightful and enjoyable experience for everyone. 
      Within the Technical University of Delft, we are conducting a study to identify flaws in a previously launched reading application, Wattpad.`,
      `By participating in this readability study, you can help identify functionality issues that web designers may have overlooked, providing invaluable insights to enhance the desktop version of Wattpad. 
      Your feedback will play a key role in creating a better, more user-friendly reading experience for the entire community, making Wattpad, and possibly even other platforms, an enjoyable space for both readers and writers.`,
    ],
    [
      `To help us obtain the most accurate results, please set the window to full-screen before continuing.`,
      `On the left side of the screen, you will be presented with a demo of a Wattpad book's reading page. Along with this, you will see a series of questions displayed one at a time on the right side.`,
      `Read the prompt and respond to each question based on your own preferences or experience. Throughout the questionnaire, you will be asked to explore and interact with specific aspects of the application, such as analyzing the layout or trying out some customizations.`,
    ],
    [
      `Your honesty is greatly valued. We appreciate your time and effort to research that promotes functionality in web design.`,
      `Let's bring people the best space to express their incredible stories!`,
    ],
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = instructions.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <img src={wattpadLogo} alt="Wattpad Logo" />

        <div className="justify-items-center">
          <p className="text-center text-[32px] font-bold text-deepTeal">
            Welcome to the Wattpad User Feedback Task!
          </p>

          <div className="px-[1rem] pt-20 text-charcoalGrey">
            <div className="flex h-[350px] flex-col justify-between">
              <div>
                {instructions[activeStep].map((paragraph, index) => (
                  <p
                    className="pt-[10px] text-justify indent-2.5"
                    key={`instruction-${index}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {activeStep === maxSteps - 1 && (
                <div className="flex items-center pt-[20px]">
                  <label className="flex cursor-pointer items-center">
                    <Checkbox
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <span className="text-[12px]">
                      I have read and understood the instructions provided
                      above, and I acknowledge the work I am expected to
                      complete.
                    </span>
                  </label>
                </div>
              )}
            </div>

            <MobileStepper
              style={{
                backgroundColor: '#FFF6F1',
                background: '#FFF6F1',
                color: '#004F59',
              }}
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                activeStep === maxSteps - 1 ? (
                  <Button
                    size="small"
                    onClick={onStartTask}
                    disabled={!isChecked}
                  >
                    Start Task
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                ) : (
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                )
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Instructions;
