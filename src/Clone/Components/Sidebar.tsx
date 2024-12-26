import React from 'react';
import { UserData } from '../../utils/storyTypes';
import AccountModal from '../Modal/AccountModal';
import { MdPersonAddAlt1 } from 'react-icons/md';
import ShareButtons from './ShareButtons';
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
        className="custom-theming mx-auto h-[72px] w-[72px] cursor-pointer rounded-full"
        alt="{data.author.username}"
      />
      <div className="text-dark text-medium text-normalbold w-fit cursor-pointer self-center hover:underline">
        by <span className="text-semibold">{author.username}</span>
      </div>
      <div className="mx-auto">
        <AccountModal
          buttonComponent={
            <div className="text-dark hover:bg-gray-1 border-light text-semibold flex cursor-pointer items-center gap-2 self-center rounded-lg border px-4 py-1">
              <div>
                <MdPersonAddAlt1 className="text-follow-teal text-medium" />
              </div>
              Follow
            </div>
          }
          isSignUp={true}
          flavourText={`to follow ${author.username} and receive updates`}
        />
      </div>
      <div className="text-middle text-small text-semibold mt-8 self-center">
        Share
      </div>
      <ShareButtons flexVal="flex-col self-center" positionVertical="top" />
    </div>
  );
};

export default Sidebar;
