import { useEffect } from 'react';

export default function useOutsideClick(refs, onClickOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      let isOutside = true;
      refs.forEach((ref) => {
        if (ref.current && ref.current.contains(event.target)) {
          isOutside = false;
        }
      });
      if (isOutside) {
        onClickOutside();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, onClickOutside]);
}
