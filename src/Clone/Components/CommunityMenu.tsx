import React from 'react';
import Menu from '../Menu';
import { useCloneContext } from '../../utils/CloneContext';

const community_options = [
  'The Watty Awards',
  'Community Happenings',
  'Wattpad Ambassadors',
];

const CommunityMenu = () => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.headerNavCommunity) return null;

  return (
    <Menu buttonVal="Community">
      <div className="w-52 px-3 py-2">
        {community_options.map((option, index) => (
          <div
            key={index}
            className="text-dark text-medium text-normalbold cursor-pointer py-[6px] hover:underline"
          >
            {option}
          </div>
        ))}
      </div>
    </Menu>
  );
};

export default CommunityMenu;
