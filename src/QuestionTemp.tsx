import React from 'react';
import { Slider, Stack } from '@mui/material';
import { useCloneContext } from './utils/CloneContext';

const QuestionTemp = ({ id, title, min, max, value, updateAnswer }) => {
  const { enabledElements, setEnabledElements, defaultStyling } =
    useCloneContext();
  const [width, setWidth] = React.useState(
    parseInt(defaultStyling.content_width.value.replace('px', '')),
  );
  const [lineHeight, setLineHeight] = React.useState(1);

  const handleCheckboxChange = (key: string) => {
    setEnabledElements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  function multiplyRem(old, factor) {
    const number = parseFloat(old.replace('rem', ''));
    return `${number * factor}rem`;
  }

  const handleSliderMove = (factor) => {
    const textVars = [
      defaultStyling.text_small,
      defaultStyling.text_medium,
      defaultStyling.text_large,
      defaultStyling.text_xlarge,
      defaultStyling.text_2xlarge,
    ];

    textVars.forEach((textVar) => {
      document
        .getElementById('root')
        .style.setProperty(
          textVar.var,
          `${multiplyRem(textVar.value, factor)}`,
        );
    });

    updateAnswer(factor);
  };

  const handleSlider2Move = (newVal) => {
    const contentWidth = defaultStyling.content_width;

    document
      .getElementById('root')
      .style.setProperty(contentWidth.var, `${newVal}px`);
    setWidth(newVal);
  };

  const handleLineHeightSliderMove = (factor) => {
    const lineHeightVars = [
      defaultStyling.description_line_height,
      defaultStyling.paragraph_line_height,
      defaultStyling.comment_line_height,
    ];

    lineHeightVars.forEach((lineHeightVar) => {
      document
        .getElementById('root')
        .style.setProperty(
          lineHeightVar.var,
          `${multiplyRem(lineHeightVar.value, factor)}`,
        );
    });

    setLineHeight(factor);
  };

  return (
    <div>
      <p className="pb-[20px] text-[20px]"> {title} </p>
      <div>
        <div>Factor for font-size</div>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
          <p>{min}x</p>
          <Slider
            value={value}
            valueLabelDisplay="auto"
            step={0.1}
            marks
            aria-label="Always visible"
            min={min}
            max={max}
            onChange={(event, value) => handleSliderMove(value)}
          />
          <p>{max}x</p>
        </Stack>
      </div>
      <div>Enabling/disabling elements</div>
      {Object.keys(enabledElements).map((key) => (
        <div key={key}>
          <label>
            <input
              type="checkbox"
              checked={enabledElements[key]}
              onChange={() => handleCheckboxChange(key)}
            />
            {key}
          </label>
        </div>
      ))}
      <div>Main content width</div>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <p>400px</p>
        <Slider
          value={width}
          valueLabelDisplay="auto"
          step={25}
          marks
          aria-label="Always visible"
          min={400}
          max={1600}
          onChange={(event, width) => handleSlider2Move(width)}
        />
        <p>1600px</p>
      </Stack>
      <div>Factor for line-height</div>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <p>0.5x</p>
        <Slider
          value={lineHeight}
          valueLabelDisplay="auto"
          step={0.1}
          marks
          aria-label="Always visible"
          min={0.5}
          max={2}
          onChange={(event, factor) => handleLineHeightSliderMove(factor)}
        />
        <p>2x</p>
      </Stack>
    </div>
  );
};

export default QuestionTemp;
