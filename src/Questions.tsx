import React, { useEffect, useState } from 'react';
import { Button, Divider, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import QuestionCheckbox from './QuestionTypes/QuestionCheckbox';
import QuestionSlider from './QuestionTypes/QuestionSlider';
import { Answer, questionGroups, QuestionType } from './utils/questions';
import QuestionLikert from './QuestionTypes/QuestionLikert';
import { useCloneContext } from './utils/CloneContext';
import QuestionTimer from './QuestionTypes/QuestionTimer';

type Props = {};

const Questions = ({}: Props) => {
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const { setCloneDisabled } = useCloneContext();

  const currentGroup = questionGroups.find((group) => group.id === activeGroup);
  const allGroupQuestionsAnswered = currentGroup.questions.every((question) => {
    const answer = answers.find((answer) => answer.id === question.id);
    return answer?.value !== undefined;
  });

  useEffect(() => {
    setCloneDisabled(currentGroup.displayHidden);
  }, [activeGroup]);

  const questionComponents = currentGroup.questions.map((question) => {
    const key = `question-${question.id}`;
    const answer = answers.find((answer) => answer.id === question.id);
    const updateAnswerProp = (newValue) => updateAnswer(newValue, question.id);
    const highlight = errorMessage && answer?.value == undefined ? true : false;

    switch (question.type) {
      case QuestionType.CHECKBOX:
        return (
          <QuestionCheckbox
            key={key}
            question={question}
            answer={answer}
            updateAnswer={updateAnswerProp}
            highlight={highlight}
          />
        );
      case QuestionType.SLIDER:
        return (
          <QuestionSlider
            key={key}
            question={question}
            answer={answer}
            updateAnswer={updateAnswerProp}
            highlight={highlight}
          />
        );
      case QuestionType.LIKERT:
        return (
          <QuestionLikert
            key={key}
            question={question}
            answer={answer}
            updateAnswer={updateAnswerProp}
            highlight={highlight}
          />
        );
      case QuestionType.TIMER:
        return (
          <QuestionTimer
            key={key}
            question={question}
            answer={answer}
            updateAnswer={updateAnswerProp}
            highlight={highlight}
            isTimerRunning={isTimerRunning}
            setIsTimerRunning={setIsTimerRunning}
          />
        );
      default:
        return;
    }
  });

  const theme = useTheme();

  const handleNext = () => {
    if (!allGroupQuestionsAnswered) {
      setErrorMessage('Please answer all questions before continuing');
      return;
    }
    if (isTimerRunning) {
      setErrorMessage('Please stop the timer before switching pages');
      return;
    }
    setErrorMessage(null);
    setActiveGroup((prevActiveGroup) => prevActiveGroup + 1);
  };

  const handleBack = () => {
    if (isTimerRunning) {
      setErrorMessage('Please stop the timer before switching pages');
      return;
    }
    setErrorMessage(null);
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
      {errorMessage && (
        <p className="text-bold mt-5 text-xl text-red-700">{errorMessage}</p>
      )}
    </div>
  );
};

export default Questions;
