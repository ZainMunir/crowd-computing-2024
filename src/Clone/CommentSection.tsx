import React from 'react';
import { CommentData } from '../utils/placeholderData';
import { FiSend } from 'react-icons/fi';
import Comment from './Comment';

type Props = {
  comments: CommentData[];
};

const CommentSection = ({ comments }: Props) => {
  const [inputVal, setInputVal] = React.useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputVal(e.target.value);
  }

  console.log(comments);
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
          className={`absolute right-2 top-2 flex h-8 w-8 items-center rounded-full ${inputVal == '' ? 'bg-violet-200' : 'bg-indigo-800'}`}
        >
          <FiSend className="mx-auto text-white" />
        </button>
      </div>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
