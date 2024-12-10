import React from 'react';
import { CommentData } from '../utils/placeholderData';
import { BsSuitHeart } from 'react-icons/bs';
import { FaEllipsisH } from 'react-icons/fa';
import { IoFlagOutline } from 'react-icons/io5';
import { IoShareSocialOutline } from 'react-icons/io5';
import { IoIosLink } from 'react-icons/io';
import { FiInfo } from 'react-icons/fi';

import { timeAgo, transformNumber } from '../utils/util';
import Menu from './Menu';
import ReportModal from './Modal/ReportModal';
import AccountModal from './Modal/AccountModal';

type Props = {
  comment: CommentData;
};

const Comment = ({ comment }: Props) => {
  return (
    <div className="grid w-full grid-cols-[40px_1fr_32px] gap-2 px-3 pb-4 text-[14px]">
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
        <Menu
          buttonVal={<FaEllipsisH className="size-5" />}
          isElement={true}
          positionHorizontal="right"
        >
          <div className="w-52 px-4 py-3 text-[14px] font-semibold">
            <ReportModal
              buttonComponent={
                <div className="flex cursor-pointer gap-2 py-2 hover:underline">
                  <IoFlagOutline className="size-5" />
                  Report Comment
                </div>
              }
              isStory={false}
            />
            <div className="flex cursor-pointer gap-2 py-2 hover:underline">
              <IoShareSocialOutline className="size-5" />
              Link to Comment
            </div>
            <div className="flex cursor-pointer gap-2 py-2 hover:underline">
              <IoIosLink className="size-5" />
              Code of Conduct
            </div>
            <div className="flex cursor-pointer gap-2 py-2 hover:underline">
              <FiInfo className="size-5" />
              Wattpad Safety Portal
            </div>
          </div>
        </Menu>
        <AccountModal
          buttonComponent={<BsSuitHeart className="mt-2 size-5" />}
          flavourText="to comment and interact with the largest storytelling community"
          isSignUp={true}
        />

        <div className="">{transformNumber(comment.likes)}</div>
      </div>
    </div>
  );
};

export default Comment;
