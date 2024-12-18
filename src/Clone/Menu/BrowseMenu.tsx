import React from 'react';
import Menu from './Menu';
import { useCloneContext } from '../../utils/CloneContext';

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

const BrowseMenu = () => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.headerNavBrowse) return null;

  return (
    <Menu buttonVal="Browse">
      <div className="flex h-[390px] w-[750px]">
        <div className="h-full w-3/4 p-2">
          <p className="text-bold text-dark text-medium pb-[14px] pt-[6px]">
            BROWSE
          </p>
          <div className="flex justify-between">
            {browse_options.map((options, index) => (
              <div key={`browse-col-${index}`} className="w-1/3">
                {options.map((option, index) => (
                  <div
                    key={`browse-${index}`}
                    className="hover:text-bold text-dark text-medium text-normalbold cursor-pointer py-[6px] hover:bg-inherit"
                  >
                    {option}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-2 h-full w-1/4 p-2">
          <p className="text-bold text-dark text-medium pb-[14px] pt-[6px]">
            WATTPAD PICKS
          </p>
          <div>
            {wattpad_picks.map((option, index) => (
              <div
                key={`wattpad-picks-${index}`}
                className="text-medium text-dark text-medium hover:text-bold text-normalbold w-full cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap py-[6px]"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default BrowseMenu;
