import React, { useState } from 'react';
import { Button, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import QuestionCheckbox from './QuestionCheckbox';
import QuestionSlider from './QuestionSlider';
import QuestionTemp from './QuestionTemp';

const Question = () => {
  const questionType = {
    CHECKBOX: 'checkbox',
    SLIDER: 'slider',
    TEMP: 'temp',
    TYPE: 'type',
  };

  const [questions, setQuestions] = useState([
    {
      title: "Let's get to know you a bit!",
      type: questionType.CHECKBOX,
      options: [
        'I never used wattpad',
        'I have heard of it and wanted to use it',
        'I did use wattpad before',
      ],
      answer: null,
    },
    {
      title: 'Choose a font size:',
      type: questionType.SLIDER,
      min: 10,
      max: 20,
      answer: null,
    },
    {
      title: 'Testing various stylings',
      type: questionType.TEMP,
      min: 0.5,
      max: 2,
      answer: null,
    },
  ]);

  const maxQuestions = questions.length;
  const [activeQuestion, setActiveQuestion] = React.useState(0);

  const theme = useTheme();

  const handleNext = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
  };

  const handleBack = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
  };

  const updateAnswer = (newAnswer) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q, index) =>
        index === activeQuestion ? { ...q, answer: newAnswer } : q,
      ),
    );
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
        {questions[activeQuestion].type === questionType.CHECKBOX && (
          <QuestionCheckbox
            id={activeQuestion}
            title={questions[activeQuestion].title}
            options={questions[activeQuestion].options}
            value={questions[activeQuestion].answer}
            updateAnswer={(value) => updateAnswer(value)}
          />
        )}
        {questions[activeQuestion].type === questionType.SLIDER && (
          <QuestionSlider
            id={activeQuestion}
            title={questions[activeQuestion].title}
            min={questions[activeQuestion].min}
            max={questions[activeQuestion].max}
            value={
              questions[activeQuestion].answer ||
              (questions[activeQuestion].min + questions[activeQuestion].max) /
                2
            }
            updateAnswer={(value) => updateAnswer(value)}
          />
        )}
        {questions[activeQuestion].type === questionType.TEMP && (
          <QuestionTemp
            id={activeQuestion}
            title={questions[activeQuestion].title}
            min={questions[activeQuestion].min}
            max={questions[activeQuestion].max}
            value={questions[activeQuestion].answer || 1}
            updateAnswer={(value) => updateAnswer(value)}
          />
        )}
        <h3>{questions[activeQuestion].title}</h3>
      </div>
    </div>
  );
};

export default Question;
