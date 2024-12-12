import React from 'react';
import { StoryData } from '../utils/storyTypes';
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
            <div className="text-middle text-small text-normalbold flex gap-2">
              <ViewStar views={views} stars={stars} />
            </div>
            <div className="text-dark text-normalbold text-medium description-line-height max-h-24 overflow-hidden">
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
