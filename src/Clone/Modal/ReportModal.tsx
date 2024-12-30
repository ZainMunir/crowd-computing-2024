import React from 'react';
import Modal from './Modal';
import { Divider } from '@mui/material';
import { RxCaretRight } from 'react-icons/rx';

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
      <div className="flex h-[445px] flex-col">
        <div className="my-4 text-center text-2xl font-semibold">
          Report {typeString}
        </div>
        <div className="mb-2 text-center text-gray-700">
          Why are you reporting this {typeString.toLowerCase()}?
        </div>
        <Divider />
        <div className="relative cursor-pointer py-4 pl-6">
          Inappropriate Content
          <div className="absolute right-4 top-4">
            <RxCaretRight className="size-6 text-gray-700" />
          </div>
        </div>
        <Divider />
        <div className="relative cursor-pointer py-4 pl-6">
          Copyright Infringement
          <div className="absolute right-4 top-4">
            <RxCaretRight className="size-6 text-gray-700" />
          </div>{' '}
        </div>
        <Divider />
        {!isStory && (
          <>
            <div className="relative cursor-pointer py-4 pl-6">
              I don't like what I'm seeing
              <div className="absolute right-4 top-4">
                <RxCaretRight className="size-6 text-gray-700" />
              </div>
            </div>
            <Divider />
          </>
        )}
      </div>
    </Modal>
  );
};

export default ReportModal;
