import { SearchIcon } from "../../../assets/icons/icons";

import "./SearchBar.scss";

function SearchBar() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("HEY YOu");
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <SearchIcon />
      <input type="text" className="search__input" placeholder="Search" />
    </form>
  );
}

export default SearchBar;
