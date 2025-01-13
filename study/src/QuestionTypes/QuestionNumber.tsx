import React from 'react';
import { Answer, Question } from '../utils/questionData';
import { TextField } from '@mui/material';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
};

const QuestionNumber = ({ question, answer, updateAnswer }: Props) => {
  const { questionText: title } = question;
  const value =
    typeof answer.value === 'number' ? answer.value : Number(answer.value);
  const handleChange = (event) => {
    updateAnswer(Math.max(0, Number(event.target.value)));
  };

  return (
    <div className="my-10">
      <p className="mb-5 text-xl">{title}</p>
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
