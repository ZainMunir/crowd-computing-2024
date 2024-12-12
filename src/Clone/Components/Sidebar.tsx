import React from 'react';
import { UserData } from '../../utils/storyTypes';
import AccountModal from '../Modal/AccountModal';
import { MdPersonAddAlt1 } from 'react-icons/md';
import ShareButtons from '../ShareButtons';
import { useCloneContext } from '../../utils/CloneContext';

type Props = {
  author: UserData;
};

const Sidebar = ({ author }: Props) => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.bodySidebar) return null;

  return (
    <div className="col-start-1 flex w-[260px] flex-col gap-2 justify-self-end">
      <img
        src={author.profilePic}
        className="mx-auto h-[72px] w-[72px] cursor-pointer rounded-full"
        alt="{data.author.username}"
      />
      <div className="w-fit cursor-pointer self-center hover:underline">
        by <span className="font-semibold">{author.username}</span>
      </div>
      <div className="mx-auto">
        <AccountModal
          buttonComponent={
            <div className="flex cursor-pointer items-center gap-2 self-center border border-gray-100 px-4 py-1 font-semibold text-gray-500 hover:bg-gray-100">
              <MdPersonAddAlt1 className="text-teal-500" />
              Follow
            </div>
          }
          isSignUp={true}
          flavourText={`to follow ${author.username} and receive updates`}
        />
      </div>
      <div className="mt-8 self-center font-semibold text-gray-500">Share</div>
      <ShareButtons flexVal="flex-col self-center" positionVertical="top" />
    </div>
  );
};

export default Sidebar;
