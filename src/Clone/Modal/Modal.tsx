import React, { useRef, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../utils/useOutsideClick';

type ModalProps = {
  children: React.ReactNode;
  buttonComponent: React.ReactNode;
  maxW?: string;
  fadeInFrom?: 'top' | 'center' | 'right';
  position?: 'top' | 'center' | 'right';
};

const Modal = ({
  children,
  buttonComponent,
  maxW = 'max-w-[400px]',
  fadeInFrom = 'top',
  position = 'top',
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  useOutsideClick([modalRef, buttonRef], () => handleClose());

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

  const fadeInClass =
    fadeInFrom === 'top'
      ? 'animate-fadeindown'
      : fadeInFrom === 'right'
        ? 'animate-fadeinright'
        : 'animate-fadein';
  const fadeOutClass =
    fadeInFrom === 'top'
      ? 'animate-fadeoutup'
      : fadeInFrom === 'right'
        ? 'animate-fadeoutright'
        : 'animate-fadeout';
  const positionClass =
    position === 'top'
      ? 'mt-10 self-start'
      : position === 'right'
        ? 'ml-auto h-full rounded-none'
        : 'items-center';

  const modalContent = (
    <div
      className={`custom-top-filter clone-width container-height fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 ${
        isClosing ? 'animate-fadeout' : 'animate-fadein'
      } `}
    >
      <div
        ref={modalRef}
        className={`relative w-full rounded-md bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)] ${maxW} ${positionClass} ${
          isClosing ? fadeOutClass : fadeInClass
        } `}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <IoCloseOutline className="text-2xl text-black" />
        </button>
        {children}
      </div>
    </div>
  );

  return (
    <div className="relative inline flex-grow self-center">
      <button onClick={handleOpen} ref={buttonRef} className="w-full">
        {buttonComponent}
      </button>
      {isOpen && createPortal(modalContent, document.body)}
    </div>
  );
};

export default Modal;
