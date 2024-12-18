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
        <div className="text-bold text-large text-dark h-12 text-center">
          🎉You've finished reading{' '}
          <span className="text-completed-red">{title}</span>
          🎉
        </div>
      ) : (
        <button
          className="bg-dark text-bold text-light hover:bg-gray-3 text-medium h-12 rounded-full"
          onClick={() => setChapterIndex((prev) => prev + 1)}
        >
          Continue to next part
        </button>
      )}
    </>
  );
};

export default ChapterNavigation;
