import React from 'react';
import { CommentData } from '../../utils/storyTypes';
import { BsSuitHeart } from 'react-icons/bs';
import { FaEllipsisH } from 'react-icons/fa';
import { IoFlagOutline } from 'react-icons/io5';
import { IoShareSocialOutline } from 'react-icons/io5';
import { IoIosLink } from 'react-icons/io';
import { FiInfo } from 'react-icons/fi';

import { timeAgo, transformNumber } from '../../utils/util';
import Menu from '../Menu/Menu';
import ReportModal from '../Modal/ReportModal';
import AccountModal from '../Modal/AccountModal';

type Props = {
  comment: CommentData;
};

const Comment = ({ comment }: Props) => {
  return (
    <div className="grid w-full grid-cols-[40px_1fr_32px] gap-2 px-3 pb-4">
      <img
        src={comment.user.profilePic}
        className="mx-auto size-10 cursor-pointer rounded-full"
        alt="{data.author.username}"
      />
      <div className="">
        <div className="text-dark text-small text-semibold w-fit cursor-pointer self-center hover:underline">
          {comment.user.username}
        </div>
        <div className="text-small comment-line-height text-normalbold text-dark my-2">
          {comment.text}
        </div>
        <div className="flex">
          <div className="text-middle text-normalbold text-small">
            {timeAgo(comment.date)}
          </div>
          <div className="text-bold text-small text-reply-purple custom-theming mx-2">
            Reply
          </div>
        </div>
      </div>
      <div className="text-dark flex flex-col items-center">
        <Menu
          buttonVal={<FaEllipsisH className="text-dark text-large" />}
          isElement={true}
          positionHorizontal="right"
        >
          <div className="min-w-max px-4 py-3 text-[14px]">
            <ReportModal
              buttonComponent={
                <div className="text-medium text-semibold text-dark flex cursor-pointer gap-2 py-2 hover:underline">
                  <IoFlagOutline className="text-dark text-large" />
                  Report Comment
                </div>
              }
              isStory={false}
            />
            <div className="text-medium text-semibold text-dark flex cursor-pointer gap-2 py-2 hover:underline">
              <IoShareSocialOutline className="text-dark text-large" />
              Link to Comment
            </div>
            <div className="text-medium text-semibold text-dark flex cursor-pointer gap-2 py-2 hover:underline">
              <IoIosLink className="text-dark text-large" />
              Code of Conduct
            </div>
            <div className="text-medium text-semibold text-dark flex cursor-pointer gap-2 py-2 hover:underline">
              <FiInfo className="text-dark text-large" />
              Wattpad Safety Portal
            </div>
          </div>
        </Menu>
        <AccountModal
          buttonComponent={<BsSuitHeart className="mt-2 size-5" />}
          flavourText="to comment and interact with the largest storytelling community"
          isSignUp={true}
        />

        <div className="text-dark text-normalbold text-small">
          {transformNumber(comment.likes)}
        </div>
      </div>
    </div>
  );
};

export default Comment;
