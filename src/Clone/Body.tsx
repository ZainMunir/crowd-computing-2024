import React from 'react';
import placeholderPoster from '../resources/placeholder_poster.jpg';
import { PlaceholderData } from '../utils/placeholderData';

type Props = {
  data: PlaceholderData;
};

const Body = ({ data }: Props) => {
  return (
    <div className="flex w-full flex-grow flex-col overflow-y-auto">
      <div>
        <div className="relative h-[340px] w-full overflow-hidden">
          <div
            style={
              // https://stackoverflow.com/questions/70805041/background-image-in-tailwindcss-using-dynamic-url-react-js
              {
                '--image-url': `url(${data.image})`,
              } as React.CSSProperties
            }
            className={`absolute h-full w-full scale-110 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat blur-xl`}
          ></div>
          <div className="absolute flex h-full w-full flex-col justify-center">
            <div className="mx-auto flex h-[245px] w-[625px] flex-row gap-3">
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
      <div>Title + stats</div>
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
