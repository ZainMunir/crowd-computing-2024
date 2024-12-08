import React from 'react';
import wattPadLogo from '../resources/wattpad-logo.png';
import Menu from './Menu';
import Modal from './Modal';
import { Divider } from '@mui/material';
import createStory from '../resources/create-story.png';
import { FaSearch } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import AccountModal from './AccountModal';

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

const Header = () => {
  return (
    <div className="fixed w-full">
      <div className="flex h-[54px]">
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
          </div>{' '}
        </Menu>
        <div className="flex items-center">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="mx-2 w-fit border-none px-2 placeholder:text-black focus:outline-none"
          />
        </div>
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
        <button className="flex h-10 items-center self-center rounded-[32px] bg-indigo-950 px-4 font-bold text-white">
          <HiLightningBolt className="mr-1 text-rose-600" />
          Try Premium
        </button>
        <AccountModal
          buttonComponent={<p className="font-bold">Log In</p>}
          flavourText="to join the largest storytelling community"
          isSignUp={false}
        />
        <AccountModal
          buttonComponent={<p className="font-bold">Sign Up</p>}
          isSignUp={true}
          flavourText="to join the largest storytelling community"
        />
      </div>
    </div>
  );
};

export default Header;
