import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Answer, Question } from '../utils/questions';
import { useCloneContext } from '../utils/CloneContext';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
  highlight: boolean;
  isTimerRunning: boolean;
  setIsTimerRunning: (isRunning: boolean) => void;
};

const QuestionTimer = ({
  question,
  answer,
  updateAnswer,
  highlight,
  isTimerRunning,
  setIsTimerRunning,
}: Props) => {
  const { questionText: title } = question;
  const { value } = answer;

  const { setHideText } = useCloneContext();

  const [timer, setTimer] = useState(value ? Number(value) : 0);

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
