import React, { useRef, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import useOutsideClick from './useOutsideClick';

type MenuProps = {
  children: React.ReactNode;
  buttonVal: React.ReactNode;
  isElement?: boolean;
  positionVertical?: 'top' | 'bottom';
  positionHorizontal?: 'left' | 'right';
};

const Menu = ({
  children,
  buttonVal,
  isElement = false,
  positionVertical = 'bottom',
  positionHorizontal = 'left',
}: MenuProps) => {
  const [isShown, setIsShown] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  useOutsideClick([wrapperRef, buttonRef], () => setIsShown(false));

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const verticalClass = positionVertical === 'top' ? 'bottom-[90%]' : 'top-[90%]';
  const horizontalClass = positionHorizontal === 'right' ? 'right-0' : 'left-0';

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className="flex h-full cursor-pointer items-center gap-1 font-semibold"
        ref={buttonRef}
      >
        {buttonVal}
        {!isElement && <FaCaretDown />}
      </button>
      {isShown && (
        <div
          className={`absolute ${verticalClass} ${horizontalClass} z-40 mt-2  bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]`}
          ref={wrapperRef}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Menu;