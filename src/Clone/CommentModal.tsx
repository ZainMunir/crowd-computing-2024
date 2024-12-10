import React from 'react';
import Modal from './Modal';
import { CommentData } from '../utils/placeholderData';
import CommentSection from './CommentSection';

type Props = {
  buttonComponent: React.ReactNode;
  comments: CommentData[];
};

const CommentModal = ({ buttonComponent, comments }: Props) => {
  return (
    <Modal
      buttonComponent={buttonComponent}
      position="right"
      fadeInFrom="right"
    >
      <div className="flex flex-col">
        <CommentSection comments={comments} defaultLoad={10}/>
      </div>
    </Modal>
  );
};

export default CommentModal;
