import React from 'react';
import Modal from './Modal';
import { Divider } from '@mui/material';

type Props = {
  buttonComponent: React.ReactNode;
  isStory: boolean;
};

const ReportModal = ({ buttonComponent, isStory }: Props) => {
  const typeString = isStory ? 'Story' : 'comment';

  return (
    <Modal
      buttonComponent={buttonComponent}
      position="center"
      fadeInFrom="center"
    >
      <div className="flex flex-col">
        <div>Report {typeString}</div>
        <div>Why are you reporting this {typeString.toLowerCase()}?</div>
        <Divider />
      </div>
    </Modal>
  );
};

export default ReportModal;
