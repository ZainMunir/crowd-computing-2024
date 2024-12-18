import React, { useEffect, useState } from 'react';
import { Button, Divider, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import QuestionCheckbox from './QuestionTypes/QuestionCheckbox';
import QuestionSlider from './QuestionTypes/QuestionSlider';
import {
  Answer,
  ProlificInfo,
  questionGroups,
  QuestionType,
} from './utils/questions';
import QuestionLikert from './QuestionTypes/QuestionLikert';
import { useCloneContext } from './utils/CloneContext';
import QuestionTimer from './QuestionTypes/QuestionTimer';
import QuestionEnabledElements from './QuestionTypes/QuestionEnabledElements';
import { defaultEnabledElements } from './utils/defaults';
import QuestionSubmission from './QuestionTypes/QuestionSubmission';
import QuestionNumber from './QuestionTypes/QuestionNumber';

type Props = {
  prolificInfo: ProlificInfo;
};

const Questions = ({ prolificInfo }: Props) => {
  const maxGroups = questionGroups.length;
  const [startTime, setStartTime] = useState(new Date());
  const [activeGroup, setActiveGroup] = React.useState(0);
  const [answers, setAnswers] = useState<Array<Answer>>(
    Array.from(
      new Map(
        questionGroups
          .flatMap((group) => group.questions)
          .map((question) => [
            question.id,
            {
              id: question.id,
              questionText: question.questionText,
              ...(question?.defaultValue && { value: question.defaultValue }),
            },
          ]),
      ).values(),
    ),
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    setCloneDisabled,
    setEnabledElements,
    hideText,
    setHideText,
    defaultStyling,
  } = useCloneContext();

  const currentGroup = questionGroups.find((group) => group.id === activeGroup);
  const allGroupQuestionsAnswered = currentGroup.questions.every((question) => {
    const answer = answers.find((answer) => answer.id === question.id);
    return answer?.value !== undefined;
  });

  useEffect(() => {
    setCloneDisabled(currentGroup.displayHidden);
    setErrorMessage(null);
    setEnabledElements(defaultEnabledElements);
    setHideText(currentGroup.textHidden);
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
      case QuestionType.NUMBER:
        return (
          <QuestionNumber
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
      case QuestionType.COMPREHENSION:
        const dependency =
          question.dependentOn &&
          !answers.find((a) => a.id === question.dependentOn)?.value;
        return (
          <QuestionCheckbox
            key={key}
            question={question}
            answer={answer}
            updateAnswer={updateAnswerProp}
            highlight={!dependency && highlight}
            display="below"
            hidden={dependency}
          />
        );
      case QuestionType.ENABLED_ELEMENTS:
        return (
          <QuestionEnabledElements
            key={key}
            question={question}
            answer={answer}
            updateAnswer={updateAnswerProp}
            highlight={highlight}
          />
        );
      case QuestionType.SUBMISSION:
        return (
          <QuestionSubmission
            key={key}
            question={question}
            answer={answer}
            updateAnswer={updateAnswerProp}
            answers={answers}
            prolificInfo={prolificInfo}
            startTime={startTime}
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
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
    setActiveGroup((prevActiveGroup) => prevActiveGroup + 1);
  };

  const handleBack = () => {
    if (isTimerRunning) {
      setErrorMessage('Please stop the timer before switching pages');
      return;
    }
    setActiveGroup((prevActiveGroup) => prevActiveGroup - 1);
  };

  const updateAnswer = (newValue, questionID) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((answer) =>
        questionID == answer.id ? { ...answer, value: newValue } : answer,
      ),
    );
  };

  const nextButton = (
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
  );

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
        nextButton={nextButton}
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeGroup === 0 || isSubmitted}
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
      <div className="flex justify-end">{nextButton}</div>
    </div>
  );
};

export default Questions;
