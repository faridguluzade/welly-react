import { BasketIcon } from "../../assets/icons/icons";

import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search">
      <BasketIcon className="search__basket-icon" />
      <span className="search__cart-quantity">1</span>
    </div>
  );
}

export default SearchBar;
