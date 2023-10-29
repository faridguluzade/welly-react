import SearchBar from "../SearchBar/SearchBar";

import { SearchIcon, UserIcon } from "../../assets/icons/icons";

import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="container nav">
      <ul className="nav__list">
        <li>
          <a className="nav__link" href="">
            Shop
          </a>
        </li>
        <li>
          <a className="nav__link" href="">
            Company
          </a>
        </li>
        <li>
          <a className="nav__link" href="">
            Store Locator
          </a>
        </li>
      </ul>

      <figure className="nav__logo-box"></figure>

      <ul className="nav__future-list">
        <li className="nav__search-box">
          <SearchIcon />
          <input type="text" className="nav__search" placeholder="Search" />
        </li>
        <li>
          <UserIcon className="nav__user-icon" />
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
