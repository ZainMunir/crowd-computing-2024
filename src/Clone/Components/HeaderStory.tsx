import React from 'react';
import { Divider } from '@mui/material';
import AccountModal from '../Modal/AccountModal';
import { IoMdStar } from 'react-icons/io';
import { StoryData } from '../../utils/storyTypes';
import ChapterPickerMenu from '../Menu/ChapterPickerMenu';
import { useCloneContext } from '../../utils/CloneContext';

type Props = {
  story: StoryData;
  chapterIndex: number;
  setChapterIndex: React.Dispatch<React.SetStateAction<number>>;
};

const HeaderStory = ({ story, chapterIndex, setChapterIndex }: Props) => {
  const { enabledElements } = useCloneContext();

  const isHeaderStoryEnabled = Object.keys(enabledElements).some(
    (key) => key.startsWith('headerStory') && enabledElements[key],
  );

  if (!isHeaderStoryEnabled) return null;

  return (
    <div className="mx-4 flex h-[54px] items-center justify-between">
      <ChapterPickerMenu
        story={story}
        chapterIndex={chapterIndex}
        setChapterIndex={setChapterIndex}
      />
      <div className="g-1 flex items-center gap-2">
        {enabledElements.headerStoryAdd && (
          <AccountModal
            buttonComponent={
              <div className="text-light text-medium text-normalbold bg-orange items-center rounded-md px-3 py-1">
                +
              </div>
            }
            flavourText="to vote or add stories to your library and receive updates"
            isSignUp={true}
          />
        )}
        {enabledElements.headerStoryAdd && enabledElements.headerStoryVote && (
          <Divider orientation="vertical" flexItem />
        )}
        {enabledElements.headerStoryVote && (
          <AccountModal
            buttonComponent={
              <div className="mx-4 flex flex-row">
                <IoMdStar className="text-large text-middle mr-2" />
                <div className="text-orange text-semibold text-medium">
                  Vote
                </div>
              </div>
            }
            flavourText="to vote or add stories to your library and receive updates"
            isSignUp={true}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderStory;
