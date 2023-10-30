import { SearchIcon } from "../../assets/icons/icons";

import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search">
      <SearchIcon />
      <input type="text" className="search__input" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
