import React, { forwardRef } from 'react';
import { CommentData } from '../utils/storyTypes';
import { FiSend } from 'react-icons/fi';
import Comment from './Comment';
import noComments from '../resources/no-comments.png';
import { FaRegComment } from 'react-icons/fa';
import AccountModal from './Modal/AccountModal';

type Props = {
  comments: CommentData[];
  defaultLoad: number;
  isInModal?: boolean;
};

const CommentSection = forwardRef<HTMLDivElement, Props>(
  ({ comments, defaultLoad, isInModal = false }, ref) => {
    const [inputVal, setInputVal] = React.useState('');
    const [load, setLoad] = React.useState(defaultLoad);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInputVal(e.target.value);
    }

    function handleShowMore() {
      setLoad((prevLoad) => prevLoad + 10);
    }

    const sortedComments = comments.sort(
      (x, y) => y.date.getTime() - x.date.getTime(),
    );

    return (
      <div className="flex w-full flex-col" ref={ref}>
        <div
          className={`relative mt-2 w-full ${isInModal ? 'sticky top-0 z-10 bg-white' : ''}`}
        >
          <input
            value={inputVal}
            placeholder="Write a comment..."
            onChange={handleInputChange}
            className="h-12 w-full rounded-full border border-gray-200 py-3 pl-4 pr-12 focus:border-indigo-800 focus:outline-none"
          />
          <AccountModal
            buttonComponent={
              <button
                className={`absolute -top-10 right-2 flex h-8 w-8 items-center rounded-full disabled:cursor-pointer ${
                  inputVal === '' ? 'bg-violet-200' : 'bg-indigo-800'
                }`}
                disabled={inputVal === ''}
              >
                <FiSend className="mx-auto text-white" />
              </button>
            }
            flavourText="to comment and interact with the largest storytelling community"
            isSignUp={true}
          />
        </div>
        {sortedComments.length == 0 ? (
          <div className="mx-auto mt-10 w-56">
            <img src={noComments} className="" />
            <div className="flex items-center justify-center gap-2 text-[14px] font-bold">
              Be the first to comment <FaRegComment />
            </div>
          </div>
        ) : (
          sortedComments
            .slice(0, load)
            .map((comment, index) => <Comment key={index} comment={comment} />)
        )}
        {load < sortedComments.length && (
          <button
            onClick={handleShowMore}
            className="mt-2 h-12 rounded-full border border-black font-bold hover:bg-gray-200"
          >
            Show more
          </button>
        )}
      </div>
    );
  },
);

export default CommentSection;
