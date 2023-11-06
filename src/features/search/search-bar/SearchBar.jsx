import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SearchIcon } from "../../../assets/icons/icons";

import "./SearchBar.scss";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchValue) return;

    navigate(`/search?name=${searchValue.trim()}&type=product`);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <span onClick={handleSubmit}>
        <SearchIcon />
      </span>
      <input
        type="text"
        className="search-form__input"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
