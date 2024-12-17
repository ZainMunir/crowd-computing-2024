import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Answer, Question } from '../utils/questions';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
};

const QuestionCheckbox = ({ question, answer, updateAnswer }: Props) => {
  const { questionText: title, options } = question;
  const { value } = answer;

  const handleCheckboxChange = (newValue) => {
    updateAnswer(newValue);
  };

  return (
    <div className="my-10">
      <p className="mb-5 text-xl">{title}</p>
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
