import React from 'react';
import Header from './Header';
import Body from './Body';
import placeholderData from '../utils/placeholderData';

const CloneLayout = () => {
  const [chapterIndex, setChapterIndex] = React.useState(0);

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Body data={placeholderData} chapterIndex={chapterIndex} setChapterIndex={setChapterIndex} />
      </div>
    </div>
  );
};

export default CloneLayout;