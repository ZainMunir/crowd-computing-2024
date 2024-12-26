import React from 'react';
import { StoryData } from '../utils/storyTypes';

import { motion, MotionValue } from 'framer-motion';
import HeaderNav from './Components/HeaderNav';
import HeaderStory from './Components/HeaderStory';
import { useCloneContext } from '../utils/CloneContext';

type Props = {
  story: StoryData;
  chapterIndex: number;
  setChapterIndex: React.Dispatch<React.SetStateAction<number>>;
  scaleX: MotionValue<number>;
};

const Header = ({ story, chapterIndex, setChapterIndex, scaleX }: Props) => {
  const { enabledElements } = useCloneContext();

  return (
    <div className="bg-light sticky top-0 z-20 flex w-full flex-col">
      <HeaderNav />
      <HeaderStory
        story={story}
        chapterIndex={chapterIndex}
        setChapterIndex={setChapterIndex}
      />
      {enabledElements.headerProgressBar && (
        <motion.div
          className="bg-progress-teal custom-theming h-1 origin-left"
          style={{ scaleX }}
        />
      )}
    </div>
  );
};

export default Header;
