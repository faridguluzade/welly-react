import { Link } from "react-router-dom";

import { useCart } from "../../features/cart/useCart";
import { useSidebar } from "../../hooks/useSidebar";

import SearchBar from "../../features/search/search-bar/SearchBar";
import CartSidebar from "../../features/cart/cart-sidebar/CartSidebar";

import { BasketIcon, UserIcon } from "../../assets/icons/icons";

import "./Navigation.scss";

function Navigation() {
  const { toggleSidebar } = useSidebar();
  const { cart } = useCart();

  const quantity = cart?.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <CartSidebar />
      <nav className="container nav">
        <ul className="nav__list">
          <li>
            <Link className="nav__link" to={"/collections"}>
              Shop
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/"}>
              Company
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/"}>
              Store Locator
            </Link>
          </li>
        </ul>

        <Link to="/" className="nav__logo-box"></Link>

        <ul className="nav__future-list">
          <li>
            <SearchBar />
          </li>
          <li>
            <Link to="account/login">
              <UserIcon className="nav__user-icon" />
            </Link>
          </li>
          <li className="nav__basket" onClick={toggleSidebar}>
            <BasketIcon className="nav__basket-icon" />
            <span className="nav__cart-quantity">{quantity}</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
