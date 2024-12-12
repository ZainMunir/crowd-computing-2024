import { Divider } from '@mui/material';
import React from 'react';
import StoryCard from '../StoryCard';
import { StoryData } from '../../utils/storyTypes';
import { useCloneContext } from '../../utils/CloneContext';

type Props = {
  relatedStories: StoryData[];
};

const RelatedStories = ({ relatedStories }: Props) => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.bodyRelatedStories) return null;

  return (
    <div className="grid w-full grid-cols-[1fr_866px_1fr]">
      <div></div>
      <div>
        <Divider orientation="horizontal" className="mt-8" />
        <div className="p-4 text-2xl text-neutral-800">You'll also like</div>
        <div className="flex flex-row justify-between gap-2">
          {relatedStories.slice(0, 2).map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RelatedStories;
