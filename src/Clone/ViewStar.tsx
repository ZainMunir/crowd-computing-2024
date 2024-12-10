import React from 'react';
import { IoMdEye, IoMdStar } from 'react-icons/io';
import { transformNumber } from '../utils/util';

type Props = {
  views: number;
  stars: number;
};

const ViewStar = ({ views, stars }: Props) => {
  return (
    <>
      <div className="flex items-center gap-1">
        <IoMdEye className="text-gray-500" />
        {transformNumber(views)}
      </div>
      <div className="flex items-center gap-1">
        <IoMdStar className="text-gray-500" />
        {transformNumber(stars)}
      </div>
    </>
  );
};

export default ViewStar;
