import React from 'react';
import { useCloneContext } from '../../utils/CloneContext';

type Props = {
  title: string;
  chapterIndex: number;
  numChapters: number;
  setChapterIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ChapterNavigation = ({
  title,
  chapterIndex,
  numChapters,
  setChapterIndex,
}: Props) => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.bodyChapterNavigation) return null;

  return (
    <>
      {chapterIndex == numChapters - 1 ? (
        <div className="text-boldh-12 text-center text-[22px] font-bold">
          🎉You've finished reading{' '}
          <span className="text-orange-800">{title}</span>
          🎉
        </div>
      ) : (
        <button
          className="h-12 rounded-full bg-black font-bold text-white hover:bg-gray-800"
          onClick={() => setChapterIndex((prev) => prev + 1)}
        >
          Continue to next part
        </button>
      )}
    </>
  );
};

export default ChapterNavigation;
