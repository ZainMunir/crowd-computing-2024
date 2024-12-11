import React from 'react';
import Menu from '../Menu';
import { Divider } from '@mui/material';
import createStory from '../../resources/create-story.png';
import { useCloneContext } from '../../utils/CloneContext';

const WriteMenu = () => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.headerNavWrite) return null;

  return (
    <Menu buttonVal="Write">
      <div className="w-[280px] px-3 py-2">
        <div className="flex">
          <img src={createStory} alt="create story" className="h-8" />
          <div className="text-dark text-medium cursor-pointer py-[6px] hover:underline">
            Create a new story
          </div>
        </div>
        <div className="text-dark text-medium cursor-pointer py-[6px] hover:underline">
          My Stories
        </div>
        <Divider variant="middle" className="bg-gray-1 m-4" />
        <div className="text-dark text-medium cursor-pointer py-[6px] hover:underline">
          Helpful writer resources
        </div>
        <div className="text-dark text-medium cursor-pointer py-[6px] hover:underline">
          Wattpad programs & opportunities
        </div>
        <div className="text-dark text-medium cursor-pointer py-[6px] hover:underline">
          Writing contests
        </div>
      </div>
    </Menu>
  );
};

export default WriteMenu;
