import React, { useEffect } from 'react';
import { Slider, Stack } from '@mui/material';
import { Answer, Question } from '../utils/questions';
import { Styling, useCloneContext } from '../utils/CloneContext';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
  highlight?: boolean;
};

const QuestionSlider = ({
  question,
  answer,
  updateAnswer,
  highlight,
}: Props) => {
  const { questionText: title, min, max, step, options } = question;
  const value =
    typeof answer.value === 'number' ? answer.value : Number(answer.value);

  const { defaultStyling } = useCloneContext();

  const styleVars: Array<{ var: string; value: string }> = Object.keys(
    defaultStyling,
  )
    .filter((key) => options.includes(key))
    .map((key) => defaultStyling[key]);

  useEffect(() => {
    styleVars.forEach((styleVar) => {
      document
        .getElementById('root')
        .style.setProperty(
          styleVar.var,
          `${multiplyRem(styleVar.value, value)}`,
        );
    });
  }, []);

  function multiplyRem(old, factor) {
    const number = parseFloat(old.replace('rem', ''));
    return `${number * factor}rem`;
  }

  const handleSliderMove = (factor) => {
    styleVars.forEach((styleVar) => {
      document
        .getElementById('root')
        .style.setProperty(
          styleVar.var,
          `${multiplyRem(styleVar.value, factor)}`,
        );
    });

    updateAnswer(factor);
  };

  return (
    <div className="my-10">
      <p className={`mb-5 text-xl ${highlight ? 'text-red-600' : ''}`}>
        {title}
      </p>{' '}
      <div>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
          <p>{min}</p>
          <Slider
            value={value}
            valueLabelDisplay="auto"
            step={step}
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
