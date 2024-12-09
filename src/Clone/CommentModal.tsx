import React from 'react';
import Modal from './Modal';

type Props = {
  buttonComponent: React.ReactNode;
};

const CommentModal = ({ buttonComponent }: Props) => {
  return (
    <Modal
      buttonComponent={buttonComponent}
      position="right"
      fadeInFrom="right"
    >
      <div className="flex flex-col">
        <div>Comment</div>
      </div>
    </Modal>
  );
};

export default CommentModal;
