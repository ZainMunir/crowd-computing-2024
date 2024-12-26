import React, { forwardRef } from 'react';
import { CommentData } from '../../utils/storyTypes';
import { FiSend } from 'react-icons/fi';
import Comment from './Comment';
import noComments from '../../resources/no-comments.png';
import { FaRegComment } from 'react-icons/fa';
import AccountModal from '../Modal/AccountModal';

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
          className={`relative mt-2 w-full ${isInModal ? 'bg-light sticky top-0 z-10' : ''}`}
        >
          <input
            value={inputVal}
            placeholder="Write a comment..."
            onChange={handleInputChange}
            className="focus:border-text-area-active text-medium border-light placeholder:text-middle text-normalbold bg-light h-12 w-full rounded-full border py-3 pl-4 pr-12 focus:outline-none"
          />
          <AccountModal
            buttonComponent={
              <button
                className={`custom-theming absolute -top-10 right-2 flex h-8 w-8 items-center rounded-full disabled:cursor-pointer ${
                  inputVal === ''
                    ? 'bg-post-button-inactive'
                    : 'bg-post-button-active'
                }`}
                disabled={inputVal === ''}
              >
                <FiSend className="text-light text-medium mx-auto" />
              </button>
            }
            flavourText="to comment and interact with the largest storytelling community"
            isSignUp={true}
          />
        </div>
        {sortedComments.length == 0 ? (
          <div className="mx-auto mt-10 w-56">
            <img src={noComments} className="" />
            <div className="text-small text-bold text-dark flex items-center justify-center gap-2">
              Be the first to comment{' '}
              <FaRegComment className="text-dark text-normalbold" />
            </div>
          </div>
        ) : (
          sortedComments
            .slice(0, load)
            .map((comment, index) => (
              <Comment key={`comment-${index}`} comment={comment} />
            ))
        )}
        {load < sortedComments.length && (
          <button
            onClick={handleShowMore}
            className="border-dark text-bold text-medium text-dark hover:bg-gray-1 mt-2 h-12 rounded-full border"
          >
            Show more
          </button>
        )}
      </div>
    );
  },
);

export default CommentSection;
