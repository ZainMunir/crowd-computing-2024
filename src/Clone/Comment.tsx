import React from 'react';
import { CommentData } from '../utils/placeholderData';
import { BsSuitHeart } from 'react-icons/bs';
import { FaEllipsisH } from 'react-icons/fa';
import { timeAgo, transformNumber } from '../utils/util';

type Props = {
  comment: CommentData;
};

const Comment = ({ comment }: Props) => {
  return (
    <div className="grid w-full grid-cols-[40px_1fr_32px] gap-2 px-3 py-2 text-[14px]">
      <img
        src={comment.user.profilePic}
        className="mx-auto size-10 cursor-pointer rounded-full"
        alt="{data.author.username}"
      />
      <div className="">
        <div className="w-fit cursor-pointer self-center font-semibold hover:underline">
          {comment.user.username}
        </div>
        <div className="my-2">{comment.text}</div>
        <div className="flex">
          <div className="text-gray-500">{timeAgo(comment.date)}</div>
          <div className="mx-2 font-bold text-purple-800">Reply</div>
        </div>
      </div>
      <div className="flex flex-col items-center text-gray-700">
        <FaEllipsisH className="size-5" />
        <BsSuitHeart className="mt-2 size-5" />
        <div className="">{transformNumber(comment.likes)}</div>
      </div>
    </div>
  );
};

export default Comment;
