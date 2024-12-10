import React from 'react';
import { CommentData } from '../utils/placeholderData';
import { FiSend } from 'react-icons/fi';
import Comment from './Comment';

type Props = {
  comments: CommentData[];
  defaultLoad: number;
};

const CommentSection = ({ comments, defaultLoad }: Props) => {
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
    <div className="flex w-full flex-col">
      <div className="relative my-2 w-full">
        <input
          value={inputVal}
          placeholder="Write a comment..."
          onChange={handleInputChange}
          className="h-12 w-full rounded-full border border-gray-200 py-3 pl-4 pr-12 focus:border-indigo-800 focus:outline-none"
        />
        <button
          className={`absolute right-2 top-2 flex h-8 w-8 items-center rounded-full ${
            inputVal === '' ? 'bg-violet-200' : 'bg-indigo-800'
          }`}
        >
          <FiSend className="mx-auto text-white" />
        </button>
      </div>
      {sortedComments.slice(0, load).map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
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
};

export default CommentSection;
