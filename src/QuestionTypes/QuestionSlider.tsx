import React from 'react';
import { Slider, Stack } from '@mui/material';
import { Answer, Question } from '../utils/questions';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
};

const QuestionSlider = ({ question, answer, updateAnswer }: Props) => {
  const { title, min, max } = question;
  const value =
    typeof answer.value === 'number' ? answer.value : Number(answer.value);
  const handleSliderMove = (newValue) => {
    updateAnswer(newValue);
  };

  return (
    <div className="my-10">
      <p className="mb-5 text-xl">{title}</p>
      <div>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
          <p>{min}</p>
          <Slider
            value={value}
            valueLabelDisplay="auto"
            step={2}
            marks
            aria-label="Always visible"
            min={min}
            max={max}
            onChange={(event, newValue) => handleSliderMove(newValue)}
          />
          <p> {max} </p>
        </Stack>
      </div>
    </div>
  );
};

export default QuestionSlider;
