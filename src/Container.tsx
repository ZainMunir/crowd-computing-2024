import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Instructions from './Instructions';
import Questions from './Questions';
import CloneLayout from './Clone/CloneLayout';
import CloneContext, { EnabledElements, Styling } from './utils/CloneContext';
import { defaultEnabledElements, defaultStyling } from './utils/defaults';
import { ProlificInfo, stories } from './utils/questionData';

const Container = () => {
  const [startTask, setStartTask] = useState(false);
  const [enabledElements, setEnabledElements] = useState<EnabledElements>(
    defaultEnabledElements,
  );
  const [styling, setStyling] = useState<Styling>(defaultStyling);
  const [cloneDisabled, setCloneDisabled] = useState(false);
  const [hideText, setHideText] = useState(true);

  const urlParams = new URLSearchParams(window.location.search);

  const prolificInfo: ProlificInfo = {
    prolificPid: urlParams.get('PROLIFIC_PID'),
    studyId: urlParams.get('STUDY_ID'),
    sessionId: urlParams.get('SESSION_ID'),
  };

  const [storyIndex, setStoryIndex] = useState(0);

  const story = stories[storyIndex];

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
        value={{
          enabledElements,
          setEnabledElements,
          defaultStyling,
          styling,
          setCloneDisabled,
          hideText,
          setHideText,
        }}
      >
        <ThemeProvider theme={customTheme}>
          <div
            className={`${
              startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
            } h-full overflow-y-auto`}
          >
            <CloneLayout story={story} disabled={cloneDisabled} />
          </div>
          <div
            className={`transform overflow-y-auto bg-warmWhite px-8 font-quicksand transition-transform duration-500 ${
              startTask ? 'translate-x-[0%]' : 'translate-x-[-100%]'
            }`}
          >
            <div className="z-50 h-full w-full">
              {!startTask ? (
                <Instructions onStartTask={() => setStartTask(true)} />
              ) : (
                <Questions
                  prolificInfo={prolificInfo}
                  setStoryIndex={setStoryIndex}
                />
              )}
            </div>
          </div>
        </ThemeProvider>
      </CloneContext.Provider>
    </div>
  );
};

export default Container;
