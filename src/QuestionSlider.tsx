import React from 'react';
import { Slider, Stack } from '@mui/material';

const QuestionSlider = ({ id, title, min, max, value, updateAnswer }) => {
  const handleSliderMove = (newValue) => {
    const remValue = newValue / 16;

    const textVars = [
      '--text-small',
      '--text-medium',
      '--text-large',
      '--text-xlarge',
      '--text-2xlarge',
    ];

    textVars.forEach((textVar) => {
      document
        .getElementById('root')
        .style.setProperty(textVar, `${remValue}rem`);
    });

    updateAnswer(newValue);
  };
  return (
    <div>
      <p className="pb-[20px] text-[20px]"> {title} </p>
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
            onChange={(event, value) => handleSliderMove(value)}
          />
          <p> {max} </p>
        </Stack>
      </div>
    </div>
  );
};

export default QuestionSlider;
