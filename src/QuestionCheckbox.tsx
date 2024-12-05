import React, { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const QuestionCheckbox = ({ id, title, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (index) => {
    setSelectedOption(index === selectedOption ? null : index);
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
                checked={selectedOption === index}
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
