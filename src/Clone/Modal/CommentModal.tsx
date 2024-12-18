import React from 'react';
import Modal from './Modal';
import { CommentData } from '../../utils/storyTypes';
import CommentSection from '../Components/CommentSection';
import { useCloneContext } from '../../utils/CloneContext';

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
  const { hideText } = useCloneContext();

  return (
    <Modal
      buttonComponent={buttonComponent}
      position="right"
      fadeInFrom="right"
      maxW="max-w-[460px]"
    >
      <div className="flex h-full flex-col">
        <div className="text-semibold text-medium text-dark p-4 text-center">
          {title}
        </div>
        <div className="overflow-y-auto px-2 pb-2">
          <div
            className={`bg-gray-1 text-dark text-medium paragraph-line-height text-normalbold p-4 ${hideText ? 'blur' : ''}`}
          >
            {paragraph}
          </div>
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
