import React from 'react';
import Modal from './Modal';
import { CommentData } from '../../utils/storyTypes';
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
      maxW="max-w-[460px]"
    >
      <div className="flex h-full flex-col">
        <div className="p-4 text-center font-semibold">{title}</div>
        <div className="overflow-y-auto px-2 pb-2">
          <div className="bg-gray-100 p-4">{paragraph}</div>
          <CommentSection
            ref={null}
            comments={comments}
            defaultLoad={10}
            isInModal={true}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CommentModal;
