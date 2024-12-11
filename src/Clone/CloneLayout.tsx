import React from 'react';
import Header from './Header';
import Body from './Body';
import placeholderData from '../utils/placeholderData';

const CloneLayout = () => {
  const [chapterIndex, setChapterIndex] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex-1 overflow-y-auto" ref={ref}>
        <Header
          data={placeholderData}
          chapterIndex={chapterIndex}
          setChapterIndex={setChapterIndex}
          scrollContainerRef={ref}
        />
        <Body
          data={placeholderData}
          chapterIndex={chapterIndex}
          setChapterIndex={setChapterIndex}
        />
      </div>
    </div>
  );
};

export default CloneLayout;