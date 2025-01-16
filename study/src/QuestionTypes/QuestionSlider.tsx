import React, { useLayoutEffect } from 'react';
import { Slider, Stack } from '@mui/material';
import { Answer, Question } from '../utils/questionData';
import { useCloneContext } from '../utils/CloneContext';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
};

const QuestionSlider = ({ question, answer, updateAnswer }: Props) => {
  const { questionText: title, min, max, step, options } = question;
  const value =
    typeof answer.value === 'number' ? answer.value : Number(answer.value);

  const { defaultStyling } = useCloneContext();

  const styleVar = defaultStyling[options[0]];

  function resetStyling() {
    document
      .getElementById('root')
      .style.setProperty(styleVar.var, styleVar.value);
  }

  useLayoutEffect(() => {
    document
      .getElementById('root')
      .style.setProperty(styleVar.var, `${value}px`);
    return resetStyling;
  }, [value]);

  const handleSliderMove = (val) => {
    updateAnswer(val);
  };

  return (
    <div className="my-10">
      <p className="mb-5 text-xl">{title}</p>
      <div>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
          <p>{min}px</p>
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
          <p>{max}px</p>
        </Stack>
      </div>
    </div>
  );
};

export default QuestionSlider;
