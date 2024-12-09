import React from 'react';
import Header from './Header';
import Body from './Body';
import placeholderData from '../utils/placeholderData';

const CloneLayout = () => {
  const [chapterIndex, setChapterIndex] = React.useState(0);


  return (
    <div className="flex h-full w-full flex-col bg-white">
      <Header />
      <Body data={placeholderData} chapterIndex={chapterIndex} setChapterIndex={setChapterIndex} />
    </div>
  );
};

export default CloneLayout;
