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
            <div className="flex-grow">
              <p className="text-light text-small text-semibold">
                YOU ARE READING
              </p>
              <p className="text-large text-light text-normalbold">
                {story.title}
              </p>
              <p className="text-small text-normalbold text-light cursor-pointer hover:underline">
                {story.genre.toUpperCase()}
              </p>
              <p className="text-light text-medium text-normalbold description-line-height max-h-[95px] overflow-hidden">
                {story.description}
              </p>
              <p className="mt-2 flex flex-row gap-4">
                {story.tags.slice(0, 5).map((tag) => (
                  <span
                    id={tag}
                    className="text-bold text-small text-light cursor-pointer hover:underline"
                  >
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
          className={`bg-gray-3 mr-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-2xl`}
        >
          <IoFlagSharp className="text-medium text-light" />
        </div>
        <div
          className={`bg-facebook-blue flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-2xl`}
        >
          <RiFacebookFill className="text-medium text-light" />
        </div>
        <div
          className={`bg-pinterest-red flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-2xl`}
        >
          <FaPinterest className="text-medium text-light" />
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
