import React from 'react';
import { Answer, Question } from '../utils/questions';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
};

const QuestionLikert = ({ question, answer, updateAnswer }: Props) => {
  const { title } = question;
  const value =
    typeof answer.value === 'number' ? answer.value : Number(answer.value);
  const handleChange = (newValue) => {
    updateAnswer(newValue);
  };

  return (
    <div className="my-10">
      <p className="mb-5 text-xl">{title}</p>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
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
    </div>
  );
};

export default QuestionLikert;
