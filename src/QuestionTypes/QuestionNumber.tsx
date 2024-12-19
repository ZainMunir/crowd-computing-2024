import React from 'react';
import { Answer, Question } from '../utils/questionData';
import { TextField } from '@mui/material';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
  highlight: boolean;
};

const QuestionNumber = ({
  question,
  answer,
  updateAnswer,
  highlight,
}: Props) => {
  const { questionText: title } = question;
  const value =
    typeof answer.value === 'number' ? answer.value : Number(answer.value);
  const handleChange = (event) => {
    updateAnswer(Number(event.target.value));
  };

  return (
    <div className="my-10">
      <p className={`mb-5 text-xl ${highlight ? 'text-red-600' : ''}`}>
        {title}
      </p>
      <TextField
        type="number"
        value={value}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default QuestionNumber;
