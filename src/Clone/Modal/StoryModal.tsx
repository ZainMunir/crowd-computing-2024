import React from 'react';
import { StoryData } from '../../utils/placeholderData';
import Modal from './Modal';
import ViewStar from '../ViewStar';
import { Divider } from '@mui/material';

type Props = {
  buttonComponent: React.ReactNode;
  story: StoryData;
  views: number;
  stars: number;
};

const StoryModal = ({ buttonComponent, story, views, stars }: Props) => {
  return (
    <Modal
      buttonComponent={buttonComponent}
      position="center"
      fadeInFrom="center"
      maxW="max-w-[560px]"
    >
      <div className="flex h-[450px] w-[560px] bg-white">
        <img src={story.image} className="h-full" />
        <div className="mx-4 my-4 flex flex-col text-center">
          <div className="text-lg font-semibold">{story.title}</div>
          <div className="flex flex-row justify-center gap-2 text-xs">
            <ViewStar views={views} stars={stars} />
          </div>
          <div>Buttons</div>
          <div className="max-h-48 overflow-hidden text-gray-500">
            {story.description}
          </div>
          <div>TAGS</div>
          <Divider />
          <div>Completion</div>
          {story.isMature && <div>Maturity</div>}
        </div>
      </div>
    </Modal>
  );
};

export default StoryModal;
