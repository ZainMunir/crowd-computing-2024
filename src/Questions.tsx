import React, { useEffect, useState } from 'react';
import { Button, Divider, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import QuestionCheckbox from './QuestionTypes/QuestionCheckbox';
import QuestionSlider from './QuestionTypes/QuestionSlider';
import { Answer, questionGroups, QuestionType } from './utils/questions';
import QuestionLikert from './QuestionTypes/QuestionLikert';

type Props = {
  setCloneDisabled: (value: boolean) => void;
};

const Questions = ({ setCloneDisabled: setDisabled }: Props) => {
  const maxGroups = questionGroups.length;
  const [activeGroup, setActiveGroup] = React.useState(0);
  const [answers, setAnswers] = useState<Array<Answer>>(
    questionGroups
      .flatMap((group) => group.questions)
      .map((question) => ({
        id: question.id,
        ...(question?.defaultValue && { value: question.defaultValue }),
      })),
  );

  const currentGroup = questionGroups.find((group) => group.id === activeGroup);

  useEffect(() => {
    setDisabled(currentGroup.displayHidden);
  }, [activeGroup]);

  const questionComponents = currentGroup.questions.map((question) => {
    switch (question.type) {
      case QuestionType.CHECKBOX:
        return (
          <QuestionCheckbox
            key={`question-${question.id}`}
            question={question}
            answer={answers.find((answer) => answer.id === question.id)}
            updateAnswer={(newValue) => updateAnswer(newValue, question.id)}
          />
        );
      case QuestionType.SLIDER:
        return (
          <QuestionSlider
            key={`question-${question.id}`}
            question={question}
            answer={answers.find((answer) => answer.id === question.id)}
            updateAnswer={(newValue) => updateAnswer(newValue, question.id)}
          />
        );
      case QuestionType.LIKERT:
        return (
          <QuestionLikert
            key={`question-${question.id}`}
            question={question}
            answer={answers.find((answer) => answer.id === question.id)}
            updateAnswer={(newValue) => updateAnswer(newValue, question.id)}
          />
        );
      default:
        return;
    }
  });

  const theme = useTheme();

  const handleNext = () => {
    setActiveGroup((prevActiveGroup) => prevActiveGroup + 1);
  };

  const handleBack = () => {
    setActiveGroup((prevActiveGroup) => prevActiveGroup - 1);
  };

  const updateAnswer = (newValue, questionID) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((answer) =>
        questionID == answer.id ? { ...answer, value: newValue } : answer,
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
        steps={maxGroups}
        position="static"
        activeStep={activeGroup}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeGroup === maxGroups - 1}
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
            disabled={activeGroup === 0}
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
      <h1 className="my-5 text-2xl">{currentGroup.title}</h1>
      <Divider />
      <div>{questionComponents}</div>
      <Divider />
    </div>
  );
};

export default Questions;
