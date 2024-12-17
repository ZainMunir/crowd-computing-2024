import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Instructions from './Instructions';
import Questions from './Questions';
import CloneLayout from './Clone/CloneLayout';
import CloneContext, { EnabledElements, Styling } from './utils/CloneContext';
import {
  defaultEnabledElements,
  defaultStyling,
  placeholderData,
} from './utils/defaults';

const Container = () => {
  const [startTask, setStartTask] = useState(true);
  const [enabledElements, setEnabledElements] = useState<EnabledElements>(
    defaultEnabledElements,
  );
  const [styling, setStyling] = useState<Styling>(defaultStyling);
  const [disabled, setDisabled] = useState(true);

  const urlParams = new URLSearchParams(window.location.search);

  const prolificInfo = {
    prolificPid: urlParams.get('PROLIFIC_PID'),
    studyId: urlParams.get('STUDY_ID'),
    sessionId: urlParams.get('SESSION_ID'),
  };

  const stories = [placeholderData, placeholderData, placeholderData];

  const hashStringToNumber = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };

  const storyIndex = prolificInfo.prolificPid
    ? (Math.abs(hashStringToNumber(prolificInfo.prolificPid)) %
        stories.length) +
      1
    : 1;

  const story = stories[storyIndex - 1];

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#004F59',
        contrastText: '#FFFFFF',
      },
    },
  });

  return (
    <div className="grid h-screen w-full grid-cols-[2fr_1fr]">
      <CloneContext.Provider
        value={{ enabledElements, setEnabledElements, defaultStyling, styling }}
      >
        <ThemeProvider theme={customTheme}>
          <div
            className={`${
              startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
            } h-full overflow-y-auto`}
          >
            <CloneLayout story={story} disabled={disabled} />
          </div>
          <div
            className={`transform bg-warmWhite px-[2rem] py-[1rem] font-quicksand transition-transform duration-500 ${
              startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
            }`}
          >
            <div className="z-50 h-full w-full">
              {!startTask ? (
                <Instructions onStartTask={() => setStartTask(true)} />
              ) : (
                <Questions />
              )}
            </div>
          </div>
        </ThemeProvider>
      </CloneContext.Provider>
    </div>
  );
};

export default Container;
