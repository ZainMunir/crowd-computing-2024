import React from 'react';
import { Slider, Stack } from '@mui/material';

const QuestionSlider = ({ id, title, min, max }) => {
  const [selectedValue, changeSelectedValue] = React.useState((min + max) / 2);
  console.log(selectedValue);
  return (
    <div>
      <p className="text-[20px] pb-[20px]"> {title} </p>
      <div>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
          <p>{min}</p>
          <Slider
            defaultValue={selectedValue}
            valueLabelDisplay="auto"
            step={2}
            marks
            aria-label="Always visible"
            min={min}
            max={max}
          />
          <p> {max} </p>
        </Stack>
      </div>
    </div>
  );
};

export default QuestionSlider;
