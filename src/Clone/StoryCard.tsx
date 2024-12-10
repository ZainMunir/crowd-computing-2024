import React from 'react';
import { StoryData } from '../utils/placeholderData';
import ViewStar from './ViewStar';
import StoryModal from './Modal/StoryModal';

type Props = {
  story: StoryData;
};

const StoryCard = ({ story }: Props) => {
  const views = story.chapters.reduce((acc, curr) => acc + curr.views, 0);
  const stars = story.chapters.reduce((acc, curr) => acc + curr.stars, 0);

  return (
    <StoryModal
      buttonComponent={
        <div className="group flex w-full cursor-pointer flex-row justify-between gap-2 text-left">
          <img src={story.image} className="w-36" />
          <div className="">
            <div className="text-xl font-semibold group-hover:underline">
              {story.title}
            </div>
            <div className="flex gap-2 text-sm text-gray-500">
              <ViewStar views={views} stars={stars} />
            </div>
            <div className="max-h-24 overflow-hidden text-gray-700">
              {story.description}
            </div>
          </div>
        </div>
      }
      story={story}
      views={views}
      stars={stars}
    />
  );
};

export default StoryCard;
