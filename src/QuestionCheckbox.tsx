import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const QuestionCheckbox = ({ id, title, options, value, updateAnswer }) => {

  const handleCheckboxChange = (index) => {
    updateAnswer(index)
  };

  return (
    <div>
      <p className='text-[20px] pb-[20px]'> {title} </p>
      <div>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={value === index}
                onChange={() => handleCheckboxChange(index)}
              />
            }
            label={option}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCheckbox;
