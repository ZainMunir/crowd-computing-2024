import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaTumblr } from 'react-icons/fa';
import { ImEmbed2 } from 'react-icons/im';
import { FaEllipsisH } from 'react-icons/fa';

type Props = {
  flexVal: string;
};

const ShareButtons = ({ flexVal }: Props) => {
  const icons = [
    { icon: <RiFacebookFill className='text-white '/>, color: 'bg-indigo-800' },
    { icon: <FaTwitter className='text-white'/>, color: 'bg-blue-400' },
    { icon: <FaPinterest className='text-white'/>, color: 'bg-red-700' },
    { icon: <FaTumblr className='text-white'/>, color: 'bg-slate-700' },
    { icon: <ImEmbed2 className='text-white'/>, color: 'bg-neutral-500' },
    { icon: <FaEllipsisH className='text-neutral-500'/>, color: 'bg-zinc-100' },
  ];

  return (
    <div className={`flex ${flexVal} gap-2`}>
      {icons.map((icon, index) => {
        return (
          <div
            key={index}
            className={`flex h-10 w-10 items-center justify-center rounded-full ${icon.color} text-2xl`}
          >
            {icon.icon}
          </div>
        );
      })}
    </div>
  );
};

export default ShareButtons;
