import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div>
      <SearchIcon />
      <input placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
