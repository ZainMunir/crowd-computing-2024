import React from 'react';
import { ChapterData } from '../../utils/storyTypes';
import { transformNumber } from '../../utils/util';
import ViewStar from '../ViewStar';
import { FaComment } from 'react-icons/fa';
import { Divider } from '@mui/material';
import { useCloneContext } from '../../utils/CloneContext';

type Props = {
  chapter: ChapterData;
  scrollToComments: () => void;
  allChapterCommentsLength: number;
};

const ChapterHeader = ({
  chapter,
  scrollToComments,
  allChapterCommentsLength,
}: Props) => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.bodyChapterHeader) return null;

  return (
    <div className="mx-auto flex w-[580px] flex-col justify-center">
      <div className="mb-5 text-center text-[32px] font-semibold">
        {chapter.title}
      </div>
      <div className="flex flex-row justify-center gap-4 text-gray-500">
        <ViewStar views={chapter.views} stars={chapter.stars} />
        <div className="flex items-center gap-1">
          <FaComment />
          <div
            className="cursor-pointer text-black hover:underline"
            onClick={scrollToComments}
          >
            {transformNumber(allChapterCommentsLength)}
          </div>
        </div>
      </div>
      <Divider orientation="horizontal" className="mt-16" />
    </div>
  );
};

export default ChapterHeader;
