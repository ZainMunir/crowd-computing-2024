import React, { useEffect, useLayoutEffect } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Answer, Question } from '../utils/questionData';
import { useCloneContext } from '../utils/CloneContext';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
};

const QuestionFonts = ({ question, answer, updateAnswer }: Props) => {
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

export default QuestionFonts;
