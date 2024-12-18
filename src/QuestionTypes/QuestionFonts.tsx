import React, { useEffect, useLayoutEffect } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Answer, Question } from '../utils/questions';
import { useCloneContext } from '../utils/CloneContext';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
  highlight: boolean;
};

const QuestionFonts = ({
  question,
  answer,
  updateAnswer,
  highlight,
}: Props) => {
  const { questionText: title, options } = question;
  const value =
    typeof answer.value === 'number' ? answer.value : Number(answer.value);

  const handleCheckboxChange = (newValue) => {
    updateAnswer(newValue);
  };

  const { defaultStyling } = useCloneContext();

  const styleVar: { var: string; value: string } =
    defaultStyling.text_font_family;

  function resetStyling() {
    document
      .getElementById('root')
      .style.setProperty(styleVar.var, styleVar.value);
  }

  useLayoutEffect(() => {
    document
      .getElementById('root')
      .style.setProperty(styleVar.var, options[value]);
    return resetStyling;
  }, [value]);

  return (
    <div className="my-10">
      <p className={`mb-5 text-xl ${highlight ? 'text-red-600' : ''}`}>
        {title}
      </p>
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

export default QuestionFonts;
