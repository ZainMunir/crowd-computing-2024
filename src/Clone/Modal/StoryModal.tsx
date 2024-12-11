import React from 'react';
import { StoryData } from '../../utils/storyTypes';
import Modal from './Modal';
import ViewStar from '../ViewStar';
import { Divider } from '@mui/material';
import { FaListUl } from 'react-icons/fa';
import { transformNumber } from '../../utils/util';
import AccountModal from './AccountModal';
import { FaCheck } from 'react-icons/fa6';
import { FaEllipsisH } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

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
        <div className="mx-4 mb-2 mt-4 flex flex-col text-center">
          <div className="text-lg font-semibold">{story.title}</div>
          <div className="my-2 flex flex-row justify-center gap-2 text-xs text-gray-500">
            <ViewStar views={views} stars={stars} />
            <div className="flex items-center gap-1">
              <FaListUl className="" />
              {transformNumber(story.chapters.length)}
            </div>
          </div>
          <div className="flex h-12 flex-row gap-2 px-4 py-2">
            <button className="max-w-5/6 w-full rounded-md bg-vibrantOrange text-white">
              Read
            </button>
            <AccountModal
              buttonComponent={
                <button className="w-10 rounded-md bg-vibrantOrange py-1 text-white">
                  +
                </button>
              }
              flavourText="to vote or add stories to your library and receive updates"
              isSignUp={true}
            />
          </div>
          <div className="max-h-36 overflow-hidden text-sm text-gray-500">
            {story.description}
          </div>
          <div className="my-2">
            {story.tags.slice(0, 3).map((tag) => (
              <div
                id={tag}
                className="mx-1 inline-block cursor-pointer rounded-full bg-gray-200 px-2 py-1 text-xs"
              >
                {tag.toLowerCase()}
              </div>
            ))}
            {story.tags.length > 3 && (
              <div className="inline-block cursor-pointer text-xs text-gray-600">
                +{story.tags.length - 3} more
              </div>
            )}
          </div>
          <Divider className="mt-auto" />
          {story.status == 'Completed' ? (
            <div className="mx-auto my-1 flex items-center gap-1 text-xs font-semibold text-teal-500">
              <FaCheck /> COMPLETED
            </div>
          ) : (
            <div className="mx-auto my-1 flex items-center gap-1 text-xs font-semibold text-vibrantOrange">
              <FaEllipsisH />
              ONGOING
            </div>
          )}

          {story.isMature && (
            <div className="mx-auto my-1 flex items-center gap-1 text-xs text-gray-500">
              <AiFillInfoCircle />
              Mature
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default StoryModal;
