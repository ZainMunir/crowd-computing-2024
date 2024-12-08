import React, { useEffect, useRef, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

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

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setIsOpen(false));


  return (
    <div className="relative inline-block">
      <button onClick={() => setIsOpen(true)}>{buttonComponent}</button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center  bg-black bg-opacity-50 ">
          <div
            ref={modalRef}
            className="relative w-full max-w-[400px] self-start mt-10 rounded-md bg-white p-6 drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)] pt-12"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <IoCloseOutline className='text-black text-2xl'/>
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
