import React, { useEffect, useRef, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
// https://stackoverflow.com/questions/73275316/tailwinds-box-shadow

type MenuProps = {
  children: React.ReactNode;
  buttonVal: React.ReactNode;
  isElement?: boolean;
};

function useOutsideClick(wrapperRef, buttonRef, onClickOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        onClickOutside();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, buttonRef, onClickOutside]);
}

const Menu = ({ children, buttonVal, isElement = false }: MenuProps) => {
  const [isShown, setIsShown] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  useOutsideClick(wrapperRef, buttonRef, () => setIsShown(false));

  const handleClick = () => {
    setIsShown(!isShown);
  };


  return (
    <div className="relative inline-block">

        <button
          onClick={handleClick}
          className="flex h-full cursor-pointer items-center gap-1 font-semibold"
          ref={buttonRef}
        >
          {buttonVal}
          {!isElement &&<FaCaretDown />}
        </button>
      {isShown && (
        <div
          className="absolute left-0 top-[90%] z-50 mt-2 border border-gray-300 bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]"
          ref={wrapperRef}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Menu;
