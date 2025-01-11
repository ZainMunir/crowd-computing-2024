import React from 'react';
import { StoryData } from '../utils/storyTypes';
import CommentSection from './Components/CommentSection';
import StoryDetails from './Components/StoryDetails';
import ChapterHeader from './Components/ChapterHeader';
import { useCloneContext } from '../utils/CloneContext';
import Sidebar from './Components/Sidebar';
import ChapterContent from './Components/ChapterContent';
import ChapterNavigation from './Components/ChapterNavigation';
import ChapterInteractions from './Components/ChapterInteractions';
import RelatedStories from './Components/RelatedStories';

type Props = {
  story: StoryData;
  chapterIndex: number;
  setChapterIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Body = ({ story, chapterIndex, setChapterIndex }: Props) => {
  const { enabledElements } = useCloneContext();

  const isBodyEnabled = Object.keys(enabledElements).some(
    (key) => key.startsWith('body') && enabledElements[key],
  );

  if (!isBodyEnabled) return null;

  const chapter = story.chapters[chapterIndex];
  const allChapterComments = chapter.paragraphs
    .map((para) => para.comments)
    .flat();

  const commentSectionRef = React.useRef<HTMLDivElement>(null);

  function scrollToComments() {
    commentSectionRef.current?.scrollIntoView();
  }

  const relatedStories = [
    story,
    story,
    story,
    story,
    story,
    story,
    story,
    story,
    story,
    story,
  ];

  return (
    <div className="flex w-full flex-grow flex-col">
      <StoryDetails story={story} />
      <ChapterHeader
        chapter={chapter}
        scrollToComments={scrollToComments}
        allChapterCommentsLength={allChapterComments.length}
      />
      <div className="grid w-full grid-cols-[1fr_var(--content-width)_1fr]">
        <Sidebar author={story.author} />
        <div className="col-start-2 mt-8 flex flex-col">
          <ChapterContent
            chapterTitle={chapter.title}
            paragraphs={chapter.paragraphs}
          />
          <div className="mx-auto mt-10 flex w-11/12 flex-col">
            <ChapterNavigation
              title={story.title}
              chapterIndex={chapterIndex}
              numChapters={story.chapters.length}
              setChapterIndex={setChapterIndex}
            />
            <ChapterInteractions />
            {enabledElements.bodyCommentSection && (
              <CommentSection
                ref={commentSectionRef}
                comments={allChapterComments}
                defaultLoad={2}
              />
            )}
          </div>
        </div>
        <div className="col-start-3"></div>
      </div>
      <RelatedStories relatedStories={relatedStories} />
    </div>
  );
};

export default Body;
