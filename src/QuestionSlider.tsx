import React from 'react';
import { Slider, Stack } from '@mui/material';

const QuestionSlider = ({ id, title, min, max, value, updateAnswer }) => {

  const handleSliderMove = (newValue) => {
    updateAnswer(newValue)
  }
  return (
    <div>
      <p className="text-[20px] pb-[20px]"> {title} </p>
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
