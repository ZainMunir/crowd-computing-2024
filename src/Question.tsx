import React from 'react';
import { Button, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import QuestionCheckbox from './QuestionCheckbox';
import QuestionSlider from './QuestionSlider';

const Question = () => {
  const questionType = {
    CHECKBOX: 'checkbox',
    SLIDER: 'slider',
  };

  const questions = [
    {
      title: "Let's get to know you a bit!",
      type: questionType.CHECKBOX,
      options: ["I never used wattpad", "I have heard of it and wanted to use it", "I did use wattpad before"],
    },
    {
      title: "Choose a font size:",
      type: questionType.SLIDER,
      min: 10,
      max:20
    }
  ];
  const maxQuestions = questions.length;
  const [activeQuestion, setActiveQuestion] = React.useState(0);

  const theme = useTheme();

  const handleNext = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
  };

  const handleBack = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
  };

  return (
    <div>
      <MobileStepper
        style={{
          backgroundColor: '#FFF6F1',
          background: '#FFF6F1',
          color: '#004F59',
        }}
        variant="text"
        steps={maxQuestions}
        position="static"
        activeStep={activeQuestion}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeQuestion === maxQuestions - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeQuestion === 0}
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
      <div>
        {
          questions[activeQuestion].type === 'checkbox' ? (
            <QuestionCheckbox
              id={activeQuestion}
              title={questions[activeQuestion].title}
              options={questions[activeQuestion].options}
            />
          ) : (
            <QuestionSlider
              id={activeQuestion}
              title={questions[activeQuestion].title}
              min={questions[activeQuestion].min}
              max={questions[activeQuestion].max}
            />
          )
}
      </div>
    </div>
  );
};

export default Question;
