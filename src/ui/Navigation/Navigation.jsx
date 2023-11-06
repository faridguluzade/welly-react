import { useMemo } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../features/cart/useCart";
import { useSidebar } from "../../hooks/useSidebar";

import SearchBar from "../../features/search/search-bar/SearchBar";
import CartSidebar from "../../features/cart/cart-sidebar/CartSidebar";

import {
  BasketIcon,
  UserIcon,
  HamburgerIcon,
  CloseIcon,
} from "../../assets/icons/icons";

import "./Navigation.scss";

function Navigation() {
  const { toggleCart, toggleMobileNav, mobileNavOpen } = useSidebar();
  const { cart } = useCart();

  const quantity = useMemo(() => {
    return cart?.reduce((acc, cur) => acc + cur.quantity, 0);
  }, [cart]);

  return (
    <>
      <CartSidebar />
      <nav className="container nav">
        {/* FOR TABLET AND MOBILE DEVICES */}
        <div className="nav__hamburger" onClick={toggleMobileNav}>
          <HamburgerIcon />
        </div>

        <ul className={`nav__list ${mobileNavOpen ? "nav__list--active" : ""}`}>
          <li onClick={toggleMobileNav}>
            <Link className="nav__link" to={"/collections"}>
              Shop
            </Link>
          </li>
          <li onClick={toggleMobileNav}>
            <Link className="nav__link" to={"/"}>
              Company
            </Link>
          </li>
          <li onClick={toggleMobileNav}>
            <Link className="nav__link" to={"/"}>
              Store Locator
            </Link>
          </li>

          {/* FOR TABLET AND MOBILE DEVICES */}
          <li className="nav__close" onClick={toggleMobileNav}>
            <CloseIcon />
          </li>
        </ul>

        <Link to="/" className="nav__logo-box"></Link>

        <ul className="nav__future-list">
          <li className="nav__search">
            <SearchBar />
          </li>
          <li>
            <Link to="login">
              <UserIcon className="nav__user-icon" />
            </Link>
          </li>
          <li className="nav__basket" onClick={toggleCart}>
            <BasketIcon className="nav__basket-icon" />
            <span className="nav__cart-quantity">{quantity}</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
