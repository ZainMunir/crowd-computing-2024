import React from 'react';
import Menu from './Menu';
import { Divider } from '@mui/material';
import AccountModal from './Modal/AccountModal';
import { IoMdStar } from 'react-icons/io';
import { StoryData } from '../utils/storyTypes';
import { RxCaretDown } from 'react-icons/rx';
import { motion, MotionValue } from 'framer-motion';
import HeaderNav from './Components/HeaderNav';

type Props = {
  data: StoryData;
  chapterIndex: number;
  setChapterIndex: React.Dispatch<React.SetStateAction<number>>;
  scaleX: MotionValue<number>;
};

const Header = ({ data, chapterIndex, setChapterIndex, scaleX }: Props) => {
  return (
    <div className="sticky top-0 z-20 flex w-full flex-col bg-white">
      <HeaderNav />
      <div className="flex h-[54px] items-center justify-between">
        <Menu
          buttonVal={
            <div className="group relative ml-5 flex h-full w-[350px] flex-row items-center gap-4 border-r border-gray-200 px-1 text-left hover:bg-gray-200">
              <img src={data.image} alt={data.title} className="h-10" />
              <div className="">
                <div className="-mb-1 text-lg font-semibold">{data.title}</div>
                <div className="text-sm text-gray-400">
                  by {data.author.username}
                </div>
              </div>
              <RxCaretDown className="absolute right-2 top-0 size-10 text-gray-400 group-hover:text-gray-600" />
            </div>
          }
          isElement={true}
          positionHorizontal="right"
        >
          <div className="max-h-[480px] w-[350px]">
            <div className="p-2">
              <div className="text-center text-base font-semibold">
                {data.title}
              </div>
              <div className="text-center text-sm text-gray-600">
                Table of Contents
              </div>
            </div>
            <div className="overflow-y-scroll">
              {data.chapters.map((chapter, index) => (
                <div
                  key={index}
                  onClick={() => setChapterIndex(index)}
                  className={`cursor-pointer border-l-4 border-transparent pb-3 pl-3 pr-5 pt-2 text-sm font-semibold hover:bg-gray-200 ${
                    chapterIndex === index
                      ? 'border-vibrantOrange bg-gray-100 text-vibrantOrange'
                      : ''
                  }`}
                >
                  {chapter.title}
                </div>
              ))}
            </div>
          </div>
        </Menu>

        <div className="g-1 flex items-center gap-2">
          <AccountModal
            buttonComponent={
              <div className="items-center rounded-md bg-vibrantOrange px-3 py-1 text-white">
                +
              </div>
            }
            flavourText="to vote or add stories to your library and receive updates"
            isSignUp={true}
          />
          <Divider orientation="vertical" flexItem />
          <AccountModal
            buttonComponent={
              <div className="mx-4 flex flex-row">
                <IoMdStar className="mr-2 text-xl text-gray-500" />
                <div className="font-semibold text-vibrantOrange">Vote</div>
              </div>
            }
            flavourText="to vote or add stories to your library and receive updates"
            isSignUp={true}
          />
        </div>
      </div>
      <motion.div className="h-1 origin-left bg-teal-500" style={{ scaleX }} />
    </div>
  );
};

export default Header;
