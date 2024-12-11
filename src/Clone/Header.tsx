import React, { forwardRef } from 'react';
import wattPadLogo from '../resources/wattpad-logo.png';
import Menu from './Menu';
import { Divider } from '@mui/material';
import createStory from '../resources/create-story.png';
import { FaSearch } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import AccountModal from './Modal/AccountModal';
import { IoMdStar } from 'react-icons/io';
import { StoryData } from '../utils/placeholderData';
import { RxCaretDown } from 'react-icons/rx';
import { motion, useScroll, useSpring } from 'framer-motion';

const browse_options = [
  [
    'Romance',
    'Wattpad Originals',
    'Fanfiction',
    'Historical Fiction',
    'Humor',
    'Diverse Lit',
    'Science Fiction',
    'Non-Fiction',
  ],
  [
    'LGBTQ+',
    'New Adult',
    'Short Story',
    'Paranormal',
    'Horror',
    'Mystery',
    'The Wattys',
    'Poetry',
  ],
  [
    'Werewolf',
    'Fantasy',
    'Teen Fiction',
    "Editor's Picks",
    'Contemporary Lit',
    'Thriller',
    'Adventure',
  ],
];
const wattpad_picks = [
  'Reading Radar',
  'Deadly Games',
  'Rich Bae, Rich Love',
  'Hot Encounters',
  'Wattpad WEBTOON Studios Hits',
  'Premium Picks',
];

const community_options = [
  'The Watty Awards',
  'Community Happenings',
  'Wattpad Ambassadors',
];

type Props = {
  data: StoryData;
  chapterIndex: number;
  setChapterIndex: React.Dispatch<React.SetStateAction<number>>;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
};

const Header = ({
  data,
  chapterIndex,
  setChapterIndex,
  scrollContainerRef,
}: Props) => {
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="sticky top-0 z-20 flex w-full flex-col bg-white">
      <div className="flex h-[54px] items-center gap-4">
        <img src={wattPadLogo} alt="wattpad logo" className="h-12" />
        <Menu buttonVal="Browse">
          <div className="flex h-[390px] w-[750px]">
            <div className="h-full w-3/4 p-2">
              <p className="pb-[14px] pt-[6px] font-bold">BROWSE</p>
              <div className="flex justify-between">
                {browse_options.map((options, index) => (
                  <div key={index} className="w-1/3">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="cursor-pointer py-[6px] hover:bg-inherit hover:font-bold"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-full w-1/4 bg-gray-100 p-2">
              <p className="pb-[14px] pt-[6px] font-bold">WATTPAD PICKS</p>
              <div>
                {wattpad_picks.map((option, index) => (
                  <div
                    key={index}
                    className="w-full cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap py-[6px] hover:bg-inherit hover:font-bold"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Menu>
        <Menu buttonVal="Community">
          <div className="w-52 px-3 py-2">
            {community_options.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer py-[6px] hover:bg-inherit hover:underline"
              >
                {option}
              </div>
            ))}
          </div>
        </Menu>
        <div className="ml-10 mr-auto flex flex-grow items-center">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="mx-2 w-full border-none px-2 placeholder:text-black focus:outline-none"
          />
        </div>
        <div className="flex flex-row">
          <Menu buttonVal="Write">
            <div className="w-[280px] px-3 py-2">
              <div className="flex">
                <img src={createStory} alt="create story" className="h-8" />
                <div className="py-[6px]">Create a new story</div>
              </div>
              <div className="py-[6px]">My Stories</div>
              <Divider variant="middle" className="m-4" />
              <div className="py-[6px]">Helpful writer resources</div>
              <div className="py-[6px]">Wattpad programs & opportunities</div>
              <div className="py-[6px]">Writing contests</div>
            </div>
          </Menu>
          <button className="mx-4 flex h-10 items-center self-center rounded-[32px] bg-indigo-950 px-6 font-bold text-white">
            <HiLightningBolt className="mr-1 text-rose-600" />
            Try Premium
          </button>
          <AccountModal
            buttonComponent={<p className="font-semibold">Log In</p>}
            flavourText="to join the largest storytelling community"
            isSignUp={false}
          />
          <AccountModal
            buttonComponent={<p className="mx-8 font-semibold">Sign Up</p>}
            isSignUp={true}
            flavourText="to join the largest storytelling community"
          />
        </div>
      </div>
      <div className="flex h-[54px] items-center justify-between">
        <Menu
          buttonVal={
            <div className="group relative ml-5 flex h-full w-[350px] flex-row items-center gap-4 border-r border-gray-200 px-1 text-left hover:bg-gray-200">
              <img src={data.image} alt={data.title} className="h-10" />
              <div className="">
                <div className="-mb-1 text-lg font-semibold">{data.title}</div>
                <div className="text-sm text-gray-700">
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
      <motion.div className="h-1 bg-teal-500 origin-left" style={{ scaleX }} />
    </div>
  );
};

export default Header;
