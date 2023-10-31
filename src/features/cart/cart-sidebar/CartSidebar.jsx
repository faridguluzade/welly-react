import { Link } from "react-router-dom";
import { useSidebar } from "../../../hooks/useSidebar";
import { ArrowLeftIcon } from "../../../assets/icons/icons";

import CartList from "../cart-list/CartList";
import Button from "../../../ui/button/Button";

import "./CartSidebar.scss";

function CartSidebar() {
  const { open, toggleSidebar } = useSidebar();
  const empty = false;

  return (
    <div className={`cart-sidebar ${open ? "cart-sidebar--active" : ""}`}>
      <div className="cart-sidebar__header">
        <span onClick={toggleSidebar}>
          <ArrowLeftIcon className="cart-sidebar__back" />
        </span>
        <h2 className="cart-sidebar__heading">Your cart</h2>
      </div>

      {empty && (
        <div className="cart-sidebar__empty">
          <p>
            Looks like there’s nothing in your cart yet. <br />
            We can help with that.
          </p>
          <Button type="outline">Start Shopping</Button>
        </div>
      )}

      {!empty && <CartList />}

      <div className="cart-sidebar__footer">
        <div className="cart-sidebar__quantity-box">
          <p>Subtotal</p>
          <span>$25.98</span>
        </div>
        <Button>Check out</Button>
        <Link className="cart-sidebar__link">Continue Shopping</Link>
      </div>
    </div>
  );
}

export default CartSidebar;
