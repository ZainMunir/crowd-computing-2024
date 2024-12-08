import React from 'react';
import placeholderPoster from '../resources/placeholder_poster.jpg';
import { StoryData } from '../utils/placeholderData';
import { IoMdEye } from 'react-icons/io';
import { IoMdStar } from 'react-icons/io';
import { FaComment } from 'react-icons/fa';
import { Divider } from '@mui/material';

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
                <p className="text-[12px]">{data.genre.toUpperCase()}</p>
                <p className="max-h-[95px] overflow-hidden text-[16px]">
                  {data.description}
                </p>
                <p className="flex flex-row gap-4 text-[15px] font-bold">
                  {data.tags.map((tag) => (
                    <span id={tag}>#{tag.toLowerCase()}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto pt-24 flex h-[250px] flex-col justify-center w-[580px]">
        <div className="text-[32px] font-semibold mb-5 text-center">{chapter.title}</div>
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
        <Divider orientation='horizontal' className='mt-auto'/>
      </div>
      <div>
        <div>Left sidebar</div>
        <div>Text + comments</div>
      </div>
      <div>You'll also like</div>
      <div>Footer</div>
    </div>
  );
};

export default Body;
