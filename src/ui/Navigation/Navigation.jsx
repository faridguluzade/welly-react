import { useSidebar } from "../../hooks/useSidebar";

import SearchBar from "../search-bar/SearchBar";
import CartSidebar from "../../features/cart/cart-sidebar/CartSidebar";

import { BasketIcon, UserIcon } from "../../assets/icons/icons";

import "./Navigation.scss";

function Navigation() {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <CartSidebar />
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
          <li>
            <SearchBar />
          </li>
          <li>
            <UserIcon className="nav__user-icon" />
          </li>
          <li className="nav__basket" onClick={toggleSidebar}>
            <BasketIcon className="nav__basket-icon" />
            <span className="nav__cart-quantity">1</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
