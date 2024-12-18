import React from 'react';
import { Answer, Question } from '../utils/questions';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
  highlight: boolean;
};

const QuestionLikert = ({
  question,
  answer,
  updateAnswer,
  highlight,
}: Props) => {
  const { questionText: title } = question;
  const value =
    typeof answer.value === 'number' ? answer.value : Number(answer.value);
  const handleChange = (newValue) => {
    updateAnswer(Number(newValue));
  };

  return (
    <div className="my-10">
      <p className={`mb-5 text-xl ${highlight ? 'text-red-600' : ''}`}>
        {title}
      </p>
      <RadioGroup
        row
        name="likert-questions"
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      >
        <FormControlLabel
          value={1}
          control={<Radio />}
          label="Strongly Disagree"
          labelPlacement="top"
        />
        <FormControlLabel
          value={2}
          control={<Radio />}
          label="Disagree"
          labelPlacement="top"
        />
        <FormControlLabel
          value={3}
          control={<Radio />}
          label="Neutral"
          labelPlacement="top"
        />
        <FormControlLabel
          value={4}
          control={<Radio />}
          label="Agree"
          labelPlacement="top"
        />
        <FormControlLabel
          value={5}
          control={<Radio />}
          label="Strongly Agree"
          labelPlacement="top"
        />
      </RadioGroup>
    </div>
  );
};

export default QuestionLikert;
