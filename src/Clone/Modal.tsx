import React, { useEffect, useRef, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

type ModalProps = {
  children: React.ReactNode;
  buttonComponent: React.ReactNode;
};

function useOutsideClick(ref, onClickOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

const Modal = ({ children, buttonComponent }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => handleClose());

  const handleOpen = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 450); // Match the duration of the fade-out animation
  };

  return (
    <div className="relative inline-block self-center">
      <button onClick={handleOpen}>{buttonComponent}</button>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
            isClosing ? 'animate-fadeout' : 'animate-fadein'
          }`}
        >
          <div
            ref={modalRef}
            className={`relative mt-10 w-full max-w-[400px] self-start rounded-md bg-white px-6 py-16 drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)] ${
              isClosing ? 'animate-fadeoutup' : 'animate-fadeindown'
            }`}
          >
            <button
              onClick={handleClose}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <IoCloseOutline className="text-2xl text-black" />
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
