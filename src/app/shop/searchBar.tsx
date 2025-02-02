"use client";

import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={handleSearch}
        className="w-[200px] md:w-[288px] h-[30px] md:h-[55px] px-3 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default SearchBar;
