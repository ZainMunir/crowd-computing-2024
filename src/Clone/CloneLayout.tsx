import React from 'react';
import Header from './Header';
import Body from './Body';
import placeholderData from '../utils/placeholderData';

const CloneLayout = () => {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <Header />
      <Body data={placeholderData} />
    </div>
  );
};

export default CloneLayout;
