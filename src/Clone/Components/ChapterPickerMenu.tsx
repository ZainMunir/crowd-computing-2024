import React from 'react';
import Menu from '../Menu';
import { StoryData } from '../../utils/storyTypes';
import { RxCaretDown } from 'react-icons/rx';
import { useCloneContext } from '../../utils/CloneContext';

type Props = {
  story: StoryData;
  chapterIndex: number;
  setChapterIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ChapterPickerMenu = ({ story, chapterIndex, setChapterIndex }: Props) => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.headerStoryChapterPicker)
    return <div className="mr-auto"></div>;

  return (
    <Menu
      buttonVal={
        <div className="border-light hover:bg-gray-2 group relative ml-5 flex h-[54px] w-[350px] flex-row items-center gap-4 border-r px-1 text-left">
          <img src={story.image} alt={story.title} className="h-full" />
          <div className="">
            <div className="text-medium text-dark text-semibold -mb-1">
              {story.title}
            </div>
            <div className="text-small text-middle text-normalbold">
              by {story.author.username}
            </div>
          </div>
          <RxCaretDown className="text-middle group-hover:text-dark text-2xlarge absolute right-2 top-3" />
        </div>
      }
      isElement={true}
      positionHorizontal="right"
    >
      <div className="max-h-[480px] w-[350px]">
        <div className="p-2">
          <div className="text-medium text-semibold text-dark text-center">
            {story.title}
          </div>
          <div className="text-middle text-small text-normalbold text-center">
            Table of Contents
          </div>
        </div>
        <div className="overflow-y-scroll">
          {story.chapters.map((chapter, index) => (
            <div
              key={index}
              onClick={() => setChapterIndex(index)}
              className={`hover:bg-gray-2 bg-gray-1 text-semibold text-small cursor-pointer border-b border-l-4 border-transparent border-b-gray-200 pb-3 pl-3 pr-5 pt-2 ${
                chapterIndex === index
                  ? 'bg-gray-2 border-orange text-orange'
                  : ''
              }`}
            >
              {chapter.title}
            </div>
          ))}
        </div>
      </div>
    </Menu>
  );
};

export default ChapterPickerMenu;
