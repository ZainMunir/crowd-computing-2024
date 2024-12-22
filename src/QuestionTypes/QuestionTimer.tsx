import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Button } from '@mui/material';
import { Answer, Question, QuestionStyleType } from '../utils/questionData';
import { EnabledElements, useCloneContext } from '../utils/CloneContext';
import { defaultEnabledElements } from '../utils/defaults';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
  highlight: boolean;
  isTimerRunning: boolean;
  setIsTimerRunning: (isRunning: boolean) => void;
  relevantAnswers?: Answer[];
  allAnswers?: Answer[];
};

const QuestionTimer = ({
  question,
  answer,
  updateAnswer,
  highlight,
  isTimerRunning,
  setIsTimerRunning,
  relevantAnswers,
  allAnswers,
}: Props) => {
  const { questionText: title } = question;
  const { value } = answer;

  console.log(relevantAnswers);

  const { setHideText, setEnabledElements, defaultStyling } = useCloneContext();

  const enabledElements = relevantAnswers?.find(
    (answer) => answer.styleType == QuestionStyleType.ENABLED_ELEMENTS,
  )?.value as EnabledElements;

  const sliders = relevantAnswers?.filter(
    (answer) =>
      answer.styleType != QuestionStyleType.ENABLED_ELEMENTS &&
      answer.styleType != QuestionStyleType.FONT_FAMILY,
  );

  const fontFamily = relevantAnswers?.find(
    (answer) => answer.styleType == QuestionStyleType.FONT_FAMILY,
  );

  const [timer, setTimer] = useState(value ? Number(value) : 0);

  function resetStyling() {
    sliders?.forEach((slider) => {
      const { options, value } = slider;
      const styleVars: Array<{ var: string; value: string }> = Object.keys(
        defaultStyling,
      )
        .filter((key) => options.includes(key))
        .map((key) => defaultStyling[key]);

      styleVars.forEach((styleVar) => {
        document
          .getElementById('root')
          .style.setProperty(styleVar.var, styleVar.value);
      });
    });

    const styleVar: { var: string; value: string } =
      defaultStyling.text_font_family;

    document
      .getElementById('root')
      .style.setProperty(styleVar.var, styleVar.value);
  }

  useLayoutEffect(() => {
    if (relevantAnswers == null) return;

    setEnabledElements(enabledElements);

    sliders?.forEach((slider) => {
      const { options, value } = slider;
      const styleVars: Array<{ var: string; value: string }> = Object.keys(
        defaultStyling,
      )
        .filter((key) => options.includes(key))
        .map((key) => defaultStyling[key]);

      styleVars.forEach((styleVar) => {
        document
          .getElementById('root')
          .style.setProperty(styleVar.var, `${value}px`);
      });
    });

    const styleVar: { var: string; value: string } =
      defaultStyling.text_font_family;

    document
      .getElementById('root')
      .style.setProperty(
        styleVar.var,
        fontFamily.options[fontFamily.value as number],
      );

    return () => {
      setEnabledElements(defaultEnabledElements);
      resetStyling();
    };
  }, [allAnswers]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10); // Increment by 1000 milliseconds (1 second)
      }, 10);
    } else if (!isTimerRunning && timer !== 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isTimerRunning, timer]);

  const handleStart = () => {
    if (!isTimerRunning && value == null) {
      setIsTimerRunning(true);
      setHideText(false);
    }
  };

  const handleStop = () => {
    setIsTimerRunning(false);
    setHideText(true);
    updateAnswer(timer); // Store the value in milliseconds
  };

  return (
    <div className="my-10">
      <p className={`mb-5 text-xl ${highlight ? 'text-red-600' : ''}`}>
        {title}
      </p>
      <div>
        <p>Timer: {Math.floor(timer / 1000)} seconds</p>{' '}
        {/* Display the value in seconds */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleStart}
          disabled={isTimerRunning || value != null}
        >
          Start
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleStop}
          disabled={!isTimerRunning}
        >
          Stop
        </Button>
      </div>
    </div>
  );
};

export default QuestionTimer;
