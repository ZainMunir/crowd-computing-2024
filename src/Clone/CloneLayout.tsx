import React from 'react';
import Header from './Header';
import Body from './Body';
import { placeholderData } from '../utils/defaults';
import { useScroll, useSpring } from 'framer-motion';

const CloneLayout = () => {
  const [chapterIndex, setChapterIndex] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex-1 overflow-y-auto" ref={ref}>
        <Header
          story={placeholderData}
          chapterIndex={chapterIndex}
          setChapterIndex={setChapterIndex}
          scaleX={scaleX}
        />
        <Body
          story={placeholderData}
          chapterIndex={chapterIndex}
          setChapterIndex={setChapterIndex}
        />
      </div>
    </div>
  );
};

export default CloneLayout;
