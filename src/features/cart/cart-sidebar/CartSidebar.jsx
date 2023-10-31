import { Link } from "react-router-dom";
import { useSidebar } from "../../../hooks/useSidebar";
import { ArrowLeftIcon } from "../../../assets/icons/icons";

import "./CartSidebar.scss";

function CartSidebar() {
  const { open, toggleSidebar } = useSidebar();

  return (
    <div className={`cart-sidebar ${open ? "cart-sidebar--active" : ""}`}>
      <div className="cart-sidebar__header">
        <span onClick={toggleSidebar}>
          <ArrowLeftIcon className="cart-sidebar__back" />
        </span>
        <h2 className="cart-sidebar__heading">Your cart</h2>
      </div>

      <div className="cart-sidebar__empty">
        <p>
          Looks like there’s nothing in your cart yet. <br />
          We can help with that.
        </p>
        <Link className="cart-sidebar__btn">Start Shopping</Link>
      </div>
    </div>
  );
}

export default CartSidebar;
