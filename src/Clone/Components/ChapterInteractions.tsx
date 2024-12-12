import React from 'react';
import AccountModal from '../Modal/AccountModal';
import { IoMdStar } from 'react-icons/io';
import ShareButtons from '../ShareButtons';
import { useCloneContext } from '../../utils/CloneContext';

type Props = {};

const ChapterInteractions = ({}: Props) => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.bodyChapterInteractions) return null;

  return (
    <div className="mt-8 flex justify-between">
      <div className="g-1 flex items-center gap-2">
        <AccountModal
          buttonComponent={
            <div className="text-dark text-medium text-normalbold">+ Add</div>
          }
          flavourText="to vote or add stories to your library and receive updates"
          isSignUp={true}
        />
        <AccountModal
          buttonComponent={
            <div className="flex flex-row">
              <IoMdStar className="text-dark text-medium mr-1 self-center" />
              <div className="text-medium text-normalbold text-dark">Vote</div>
            </div>
          }
          flavourText="to vote or add stories to your library and receive updates"
          isSignUp={true}
        />
      </div>
      <ShareButtons flexVal="flex-row" positionHorizontal="right" />
    </div>
  );
};

export default ChapterInteractions;
