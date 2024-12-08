import React from 'react';
import wattPadLogo from '../resources/wattpad-logo.png';
import Menu from './Menu';

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
                    className="cursor-pointer whitespace-nowrap py-[6px] hover:bg-inherit hover:font-bold overflow-hidden overflow-ellipsis w-full"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
