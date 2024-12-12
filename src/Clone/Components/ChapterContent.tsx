import React from 'react';
import { ParagraphData } from '../../utils/storyTypes';
import CommentModal from '../Modal/CommentModal';
import { BiSolidComment } from 'react-icons/bi';
import { transformNumber } from '../../utils/util';
import { useCloneContext } from '../../utils/CloneContext';

type Props = {
  chapterTitle: string;
  paragraphs: ParagraphData[];
};

const ChapterContent = ({ paragraphs, chapterTitle }: Props) => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.bodyChapterContent) return null;

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="group/para relative mb-5 flex">
          <div className="mx-auto w-11/12">{paragraph.text}</div>
          {enabledElements.bodyInlineComments && (
            <CommentModal
              buttonComponent={
                <div
                  className={`group/comment flex cursor-pointer items-center justify-center self-end ${paragraph.comments.length == 0 ? 'hidden group-hover/para:inline-flex' : ''}`}
                >
                  <BiSolidComment className="size-8 text-gray-500 group-hover/comment:text-gray-300" />
                  <div className="absolute w-10 -translate-y-1 transform text-center text-xs font-semibold text-white">
                    {paragraph.comments.length == 0
                      ? '+'
                      : transformNumber(paragraph.comments.length)}
                  </div>
                </div>
              }
              title={chapterTitle}
              paragraph={paragraph.text}
              comments={paragraph.comments}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ChapterContent;
