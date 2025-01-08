import React, { useLayoutEffect } from 'react';
import { Answer, Question } from '../utils/questionData';
import { EnabledElements, useCloneContext } from '../utils/CloneContext';
import { Checkbox, FormControlLabel } from '@mui/material';
import { defaultEnabledElements } from '../utils/defaults';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: EnabledElements) => void;
};

const QuestionEnabledElements = ({ question, answer, updateAnswer }: Props) => {
  const { questionText: title } = question;

  const value = answer.value as EnabledElements;

  const { setEnabledElements } = useCloneContext();

  useLayoutEffect(() => {
    setEnabledElements(value);

    return () => {
      setEnabledElements(defaultEnabledElements);
    };
  }, [value]);

  const handleCheckboxChange = (key: string) => {
    const newValue = {
      ...value,
      [key]: !value[key],
    };
    setEnabledElements(newValue);
    updateAnswer(newValue);
  };

  const groups = [
    'headerNav',
    'headerStory',
    'headerProgress',
    'body',
    'footer',
  ];

  const groupedElements = groups.reduce((acc, group) => {
    acc[group] = Object.keys(value).filter((key) => key.startsWith(group));
    return acc;
  }, {});

  const formatKey = (key: string) => {
    let formattedKey = key;
    groups.slice(0, -1).forEach((prefix) => {
      formattedKey = formattedKey.replace(prefix, '');
    });
    return formattedKey.split(/(?=[A-Z])/).join(' ');
  };

  return (
    <div className="my-10">
      <p className="mb-5 text-xl">{title}</p>
      {Object.keys(groupedElements).map((group) => (
        <div key={group} className="mb-5 capitalize">
          <p className="mb-2 text-lg font-semibold">
            {group.split(/(?=[A-Z])/).join(' ')}
          </p>
          <div className="flex flex-row flex-wrap">
            {groupedElements[group].map((key) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={value[key]}
                    onChange={() => handleCheckboxChange(key)}
                  />
                }
                label={formatKey(key)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionEnabledElements;
