import React, { useLayoutEffect } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Answer, Question } from '../utils/questionData';
import { useCloneContext } from '../utils/CloneContext';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
  highlight: boolean;
  display?: 'side' | 'below';
  hidden?: boolean;
};

const QuestionTheme = ({
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

  function mapping(value: number) {
    switch (options[value]) {
      case 'Light':
        return '0%';
      case 'Dark':
        return '100%';
    }
  }

  const { defaultStyling } = useCloneContext();

  const styleVar: { var: string; value: string } =
    defaultStyling.custom_inverted;

  function resetStyling() {
    document
      .getElementsByTagName('body')[0]
      .style.setProperty(styleVar.var, styleVar.value);
  }

  useLayoutEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .style.setProperty(styleVar.var, mapping(value));
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

export default QuestionTheme;
