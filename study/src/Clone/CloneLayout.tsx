import React from 'react';
import Header from './Header';
import Body from './Body';
import { useScroll, useSpring } from 'framer-motion';
import Footer from './Footer';
import { StoryData } from '../utils/storyTypes';

type Props = {
  story: StoryData;
  disabled: boolean;
};

const CloneLayout = ({ story, disabled }: Props) => {
  const [chapterIndex, setChapterIndex] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-light text-font-family custom-theming custom-top-filter flex h-full w-full flex-col">
      {disabled && (
        <div className="items- fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md" />
      )}
      <div className="flex-1 overflow-y-auto" ref={ref}>
        <Header
          story={story}
          chapterIndex={chapterIndex}
          setChapterIndex={setChapterIndex}
          scaleX={scaleX}
        />
        <Body
          story={story}
          chapterIndex={chapterIndex}
          setChapterIndex={setChapterIndex}
        />
        <Footer />
      </div>
    </div>
  );
};

export default CloneLayout;
