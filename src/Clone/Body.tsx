import React from 'react';
import placeholderPoster from '../resources/placeholder_poster.jpg';
import { StoryData } from '../utils/placeholderData';
import { IoMdEye } from 'react-icons/io';
import { IoMdStar } from 'react-icons/io';
import { FaComment } from 'react-icons/fa';
import { Divider } from '@mui/material';
import { MdPersonAddAlt1 } from 'react-icons/md';
import AccountModal from './AccountModal';
import ShareButtons from './ShareButtons';

type Props = {
  data: StoryData;
  chapterIndex: number;
};

const Body = ({ data, chapterIndex: chapterNo }: Props) => {
  function transformNumber(num: number): string {
    if (num < 1000) {
      return num.toString();
    } else if (num < 1000000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return `${(num / 1000000).toFixed(1)}M`;
  }

  const chapter = data.chapters[chapterNo];
  return (
    <div className="flex w-full flex-grow flex-col overflow-y-auto">
      <div>
        <div className="h-[340px] w-full overflow-hidden">
          <div
            style={
              // https://stackoverflow.com/questions/70805041/background-image-in-tailwindcss-using-dynamic-url-react-js
              {
                '--image-url': `url(${data.image})`,
              } as React.CSSProperties
            }
            className={`h-full w-full scale-110 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat blur-xl`}
          ></div>
          <div className="mt-[-340px] flex h-full w-full flex-col justify-center">
            <div className="z-10 mx-auto flex h-[245px] w-[625px] flex-row gap-3">
              <img src={data.image} />
              <div className="flex-grow text-white">
                <p className="text-[15px] font-semibold">YOU ARE READING</p>
                <p className="text-[24px]">{data.title}</p>
                <p className="text-[12px] hover:underline cursor-pointer">{data.genre.toUpperCase()}</p>
                <p className="max-h-[95px] overflow-hidden text-[16px]">
                  {data.description}
                </p>
                <p className="flex flex-row gap-4 text-[15px] font-bold">
                  {data.tags.map((tag) => (
                    <span id={tag} className='hover:underline cursor-pointer'>#{tag.toLowerCase()}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[250px] w-[580px] flex-col justify-center pt-24">
        <div className="mb-5 text-center text-[32px] font-semibold">
          {chapter.title}
        </div>
        <div className="flex flex-row justify-center gap-4">
          <div className="flex items-center gap-1">
            <IoMdEye className="text-gray-500" />
            {transformNumber(chapter.views)}
          </div>
          <div className="flex items-center gap-1">
            <IoMdStar className="text-gray-500" />
            {transformNumber(chapter.stars)}
          </div>
          <div className="flex items-center gap-1">
            <FaComment className="text-gray-500" />
            {transformNumber(chapter.numComments)}
          </div>
        </div>
        <Divider orientation="horizontal" className="mt-auto" />
      </div>
      <div className="grid w-full grid-cols-[1fr_625px_1fr]">
        <div className="col-start-1 flex w-[260px] flex-col gap-2 justify-self-end">
          <img
            src={data.author.profilePic}
            className="mx-auto h-[72px] w-[72px] cursor-pointer rounded-full"
            alt="{data.author.username}"
          />
          <div className="w-fit cursor-pointer self-center hover:underline">
            by <span className="font-semibold">{data.author.username}</span>
          </div>
          <AccountModal
            buttonComponent={
              <div className="flex cursor-pointer items-center gap-2 self-center border border-gray-100 px-4 py-1 font-semibold text-gray-500 hover:bg-gray-100">
                <MdPersonAddAlt1 className="text-teal-500" />
                Follow
              </div>
            }
            isSignUp={true}
            flavourText={`to follow ${data.author.username} and receive updates`}
          />
          <div className="mt-8 self-center font-semibold text-gray-500">
            Share
          </div>
          <ShareButtons flexVal="flex-col self-center" />
        </div>
        <div className="col-start-2">Text + comments</div>
        <div className="col-start-3"></div>
      </div>
      <div>You'll also like</div>
      <div>Footer</div>
    </div>
  );
};

export default Body;
