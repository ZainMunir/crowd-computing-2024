import React from 'react';
import Modal from './Modal';
import { CommentData } from '../../utils/placeholderData';
import CommentSection from '../CommentSection';

type Props = {
  buttonComponent: React.ReactNode;
  title: string;
  paragraph: string;
  comments: CommentData[];
};

const CommentModal = ({
  buttonComponent,
  title,
  paragraph,
  comments,
}: Props) => {
  return (
    <Modal
      buttonComponent={buttonComponent}
      position="right"
      fadeInFrom="right"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 text-center font-semibold">{title}</div>
        <div className='pb-2 px-2 overflow-y-auto'>
        <div className="bg-gray-100 p-4">{paragraph}</div>
          <CommentSection comments={comments} defaultLoad={10} isInModal={true} />
        </div>
      </div>
    </Modal>
  );
};

export default CommentModal;
