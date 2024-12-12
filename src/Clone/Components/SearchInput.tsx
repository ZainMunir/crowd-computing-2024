import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useCloneContext } from '../../utils/CloneContext';

const SearchInput = () => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.headerNavSearch) return <div className="mr-auto"></div>;

  return (
    <div className="ml-10 mr-auto flex flex-grow items-center">
      <FaSearch className="text-dark text-medium" />
      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-dark text-semibold text-medium mx-2 w-full border-none px-2 focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
