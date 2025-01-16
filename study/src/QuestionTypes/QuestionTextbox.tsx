import React, { useEffect, useLayoutEffect } from 'react';
import { FormControlLabel, Checkbox, TextField } from '@mui/material';
import { Answer, Question } from '../utils/questionData';
import { useCloneContext } from '../utils/CloneContext';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: string) => void;
  highlight: boolean;
};

const QuestionTextBox = ({
  question,
  answer,
  updateAnswer,
  highlight,
}: Props) => {
  const { questionText: title, mandatory } = question;
  const value =
    typeof answer.value === 'string' ? answer.value : String(answer.value);

  const handleChange = (newValue) => {
    updateAnswer(newValue);
  };

  return (
    <div className="my-10">
      <p
        className={`mb-5 text-xl ${mandatory && highlight ? 'text-red-600' : ''}`}
      >
        {title}
      </p>
      <div className="flex flex-col gap-10">
        <TextField
          id="textbox"
          label="only fill if necessary"
          variant="outlined"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>
    </div>
  );
};

export default QuestionTextBox;
