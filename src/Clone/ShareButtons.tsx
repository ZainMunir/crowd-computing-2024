import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaTumblr } from 'react-icons/fa';
import { ImEmbed2 } from 'react-icons/im';
import { FaEllipsisH } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaExclamationCircle } from 'react-icons/fa';
import Menu from './Menu';
import { Divider } from '@mui/material';
import AccountModal from './Modal/AccountModal';
import ReportModal from './Modal/ReportModal';

type Props = {
  flexVal: string;
  positionVertical?: 'top' | 'bottom';
  positionHorizontal?: 'left' | 'right';
};

const ShareButtons = ({
  flexVal,
  positionVertical = 'bottom',
  positionHorizontal = 'left',
}: Props) => {
  const icons = [
    { icon: <RiFacebookFill className="text-white" />, color: 'bg-indigo-800' },
    { icon: <FaTwitter className="text-white" />, color: 'bg-blue-400' },
    { icon: <FaPinterest className="text-white" />, color: 'bg-red-700' },
    { icon: <FaTumblr className="text-white" />, color: 'bg-slate-700' },
    { icon: <ImEmbed2 className="text-white" />, color: 'bg-neutral-500' },
    {
      icon: <FaEllipsisH className="text-neutral-500" />,
      color: 'bg-zinc-100',
    },
  ];

  const circles = icons.map((icon, index) => {
    return (
      <div
        key={index}
        className={`flex h-10 w-10 items-center justify-center rounded-full ${icon.color} cursor-pointer text-2xl`}
      >
        {icon.icon}
      </div>
    );
  });

  return (
    <div className={`flex ${flexVal} gap-2`}>
      {circles.slice(0, -1)}
      <Menu
        buttonVal={circles[circles.length - 1]}
        isElement={true}
        positionVertical={positionVertical}
        positionHorizontal={positionHorizontal}
      >
        <div className="w-44 cursor-pointer text-neutral-500">
          <AccountModal
            buttonComponent={
              <div className="group flex flex-row items-center gap-2 px-2 py-1 hover:bg-gray-200">
                <FaUserAlt className="group-hover:text-cyan-700" />
                <div>Post to Your Profile</div>
              </div>
            }
            flavourText="to vote or add stories to your library and receive updates"
            isSignUp={true}
          />
          <Divider className="" />
          <div className="group flex flex-row items-center gap-2 px-2 py-1 hover:bg-gray-200">
            <MdEmail className="group-hover:text-cyan-700" />
            <div>Share via Email</div>
          </div>
          <Divider className="" />
          <ReportModal
            buttonComponent={
              <div className="group flex flex-row items-center gap-2 px-2 py-1 hover:bg-gray-200 w-full">
                <FaExclamationCircle className="group-hover:text-cyan-700" />
                <div>Report Story</div>
              </div>
            }
            isStory={true}
          />
        </div>
      </Menu>
    </div>
  );
};

export default ShareButtons;
