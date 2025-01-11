import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Answer, Question } from '../utils/questionData';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
  highlight: boolean;
  display?: 'side' | 'below';
  hidden?: boolean;
};

const QuestionCheckbox = ({
  question,
  answer,
  updateAnswer,
  highlight,
  display = 'side',
  hidden = false,
}: Props) => {
  const { questionText: title, options } = question;
  const { value } = answer;

  const handleCheckboxChange = (newValue) => {
    updateAnswer(newValue);
  };

  return (
    <div className={`my-10 ${hidden ? 'select-none blur' : ''}`}>
      <p className={`mb-5 text-xl ${highlight ? 'text-red-600' : ''}`}>
        {title}
      </p>
      <div className={`${display === 'below' ? 'flex flex-col' : ''}`}>
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
            disabled={hidden}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCheckbox;
