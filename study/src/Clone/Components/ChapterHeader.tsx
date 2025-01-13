import React from 'react';
import { ChapterData } from '../../utils/storyTypes';
import { transformNumber } from '../../utils/util';
import ViewStar from './ViewStar';
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

  if (!enabledElements.bodyChapterHeader && !enabledElements.bodyChapterStats)
    return null;

  return (
    <div className="mx-auto mt-10 flex w-[580px] flex-col justify-center">
      {enabledElements.bodyChapterHeader && (
        <div className="text-2xlarge text-dark text-semibold mb-5 text-center">
          {chapter.title}
        </div>
      )}
      {enabledElements.bodyChapterStats && (
        <div className="text-middle text-medium flex flex-row justify-center gap-4">
          <ViewStar views={chapter.views} stars={chapter.stars} />
          <div className="flex items-center gap-1">
            <div>
              <FaComment />
            </div>
            <div
              className="text-dark text-medium cursor-pointer hover:underline"
              onClick={scrollToComments}
            >
              {transformNumber(allChapterCommentsLength)}
            </div>
          </div>
        </div>
      )}
      <Divider orientation="horizontal" className="bg-gray-1 mt-16" />
    </div>
  );
};

export default ChapterHeader;
