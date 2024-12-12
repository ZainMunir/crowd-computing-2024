import React from 'react';
import { StoryData } from '../../utils/storyTypes';
import { IoFlagSharp } from 'react-icons/io5';
import { RiFacebookFill } from 'react-icons/ri';
import { FaPinterest } from 'react-icons/fa';
import { useCloneContext } from '../../utils/CloneContext';

type Props = {
  story: StoryData;
};

const StoryDetails = ({ story }: Props) => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.bodyStoryDetails) return null;

  return (
    <div className="group">
      <div className="h-[340px] w-full overflow-hidden">
        <div
          style={
            // https://stackoverflow.com/questions/70805041/background-image-in-tailwindcss-using-dynamic-url-react-js
            {
              '--image-url': `url(${story.image})`,
            } as React.CSSProperties
          }
          className={`h-full w-full scale-110 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat blur-xl`}
        ></div>
        <div className="mt-[-340px] flex h-full w-full flex-col justify-center">
          <div className="z-10 mx-auto flex h-[245px] w-[625px] flex-row gap-3">
            <img src={story.image} />
            <div className="flex-grow text-white">
              <p className="text-[15px] font-semibold">YOU ARE READING</p>
              <p className="text-[24px]">{story.title}</p>
              <p className="cursor-pointer text-[12px] hover:underline">
                {story.genre.toUpperCase()}
              </p>
              <p className="max-h-[95px] overflow-hidden text-[16px]">
                {story.description}
              </p>
              <p className="flex flex-row gap-4 text-[15px] font-bold">
                {story.tags.slice(0, 5).map((tag) => (
                  <span id={tag} className="cursor-pointer hover:underline">
                    #{tag.toLowerCase()}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="invisible mx-20 mb-24 mt-1 flex flex-row gap-10 group-hover:visible">
        <div
          className={`mr-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-neutral-500 text-2xl`}
        >
          <IoFlagSharp className="size-4 text-white" />
        </div>
        <div
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-indigo-800 text-2xl`}
        >
          <RiFacebookFill className="size-4 text-white" />
        </div>
        <div
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-700 text-2xl`}
        >
          <FaPinterest className="size-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
