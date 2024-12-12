import React from 'react';
import { IoMdEye, IoMdStar } from 'react-icons/io';
import { transformNumber } from '../../utils/util';

type Props = {
  views: number;
  stars: number;
};

const ViewStar = ({ views, stars }: Props) => {
  return (
    <>
      <div className="flex items-center gap-1">
        <IoMdEye />
        {transformNumber(views)}
      </div>
      <div className="flex items-center gap-1">
        <IoMdStar />
        {transformNumber(stars)}
      </div>
    </>
  );
};

export default ViewStar;
