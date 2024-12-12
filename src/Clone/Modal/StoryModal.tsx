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
      <div className="bg-light flex h-[450px] w-[560px]">
        <img src={story.image} className="h-full" />
        <div className="mx-4 mb-2 mt-4 flex flex-col text-center">
          <div className="text-large text-semibold text-dark">
            {story.title}
          </div>
          <div className="text-middle text-small text-normalbold my-2 flex flex-row justify-center gap-2">
            <ViewStar views={views} stars={stars} />
            <div className="text-normalbold text-middle text-small flex items-center gap-1">
              <FaListUl className="text-small text-middle" />
              {transformNumber(story.chapters.length)}
            </div>
          </div>
          <div className="flex h-12 flex-row gap-2 px-4 py-2">
            <button className="max-w-5/6 bg-orange text-light text-medium text-semibold w-full rounded-md">
              Read
            </button>
            <AccountModal
              buttonComponent={
                <button className="text-light bg-orange text-medium text-semibold w-10 rounded-md py-1">
                  +
                </button>
              }
              flavourText="to vote or add stories to your library and receive updates"
              isSignUp={true}
            />
          </div>
          <div className="text-middle text-small text-normalbold description-line-height max-h-36 overflow-hidden">
            {story.description}
          </div>
          <div className="my-2">
            {story.tags.slice(0, 3).map((tag) => (
              <div
                id={tag}
                className="bg-gray-2 text-small text-dark text-normalbold mx-1 inline-block cursor-pointer rounded-full px-2 py-1"
              >
                {tag.toLowerCase()}
              </div>
            ))}
            {story.tags.length > 3 && (
              <div className="text-small text-middle text-normalbold inline-block cursor-pointer">
                +{story.tags.length - 3} more
              </div>
            )}
          </div>
          <Divider className="bg-gray-1 mt-auto" />
          {story.status == 'Completed' ? (
            <div className="text-completed-teal text-small text-semibold mx-auto my-1 flex items-center gap-1">
              <FaCheck /> COMPLETED
            </div>
          ) : (
            <div className="text-orange text-small text-semibold mx-auto my-1 flex items-center gap-1">
              <FaEllipsisH />
              ONGOING
            </div>
          )}

          {story.isMature && (
            <div className="text-small text-middle text-normalbold mx-auto my-1 flex items-center gap-1">
              <AiFillInfoCircle className="text-small text-middle" />
              Mature
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default StoryModal;
