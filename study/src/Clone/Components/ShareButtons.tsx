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
import Menu from '../Menu/Menu';
import { Divider } from '@mui/material';
import AccountModal from '../Modal/AccountModal';
import ReportModal from '../Modal/ReportModal';

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
    {
      icon: <RiFacebookFill className="text-light text-large" />,
      color: 'bg-facebook-blue',
    },
    {
      icon: <FaTwitter className="text-light text-large" />,
      color: 'bg-twitter-blue',
    },
    {
      icon: <FaPinterest className="text-light text-large" />,
      color: 'bg-pinterest-red',
    },
    {
      icon: <FaTumblr className="text-light text-large" />,
      color: 'bg-tumblr-blue',
    },
    {
      icon: <ImEmbed2 className="text-light text-large" />,
      color: 'bg-gray-3',
    },
    {
      icon: <FaEllipsisH className="text-middle text-large" />,
      color: 'bg-gray-1',
    },
  ];

  const circles = icons.map((icon, index) => {
    return (
      <div
        key={`sharebutton-${index}`}
        className={`flex h-10 w-10 items-center justify-center rounded-full ${icon.color} cursor-pointer`}
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
        <div className="text-middle text-medium text-normalbold min-w-max cursor-pointer">
          <AccountModal
            buttonComponent={
              <div className="hover:bg-gray-1 group flex flex-row items-center gap-2 px-2 py-1">
                <FaUserAlt className="group-hover:text-menu-hover" />
                <div>Post to Your Profile</div>
              </div>
            }
            flavourText="to vote or add stories to your library and receive updates"
            isSignUp={true}
          />
          <Divider className="bg-gray-" />
          <div className="hover:bg-gray-1 group flex flex-row items-center gap-2 px-2 py-1">
            <MdEmail className="group-hover:text-menu-hover" />
            <div>Share via Email</div>
          </div>
          <Divider className="bg-gray-1" />
          <ReportModal
            buttonComponent={
              <div className="hover:bg-gray-1 group flex w-full flex-row items-center gap-2 px-2 py-1">
                <FaExclamationCircle className="group-hover:text-menu-hover" />
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
