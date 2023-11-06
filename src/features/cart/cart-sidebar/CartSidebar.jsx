import { useMemo } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useSidebar } from "../../../hooks/useSidebar";
import { useCart } from "../useCart";

import { ArrowLeftIcon } from "../../../assets/icons/icons";
import CartList from "../cart-list/CartList";
import Button from "../../../ui/button/Button";

import "./CartSidebar.scss";
import { formatCurrency } from "../../../utils/helpers";

function CartSidebar() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { cartOpen, toggleCart } = useSidebar();
  const empty = cart?.length === 0;

  const subtotal = useMemo(() => {
    return cart?.reduce((acc, cur) => acc + cur.totalPrice, 0).toFixed(2);
  }, [cart]);

  return (
    <div className={`cart-sidebar ${cartOpen ? "cart-sidebar--active" : ""}`}>
      <div className="cart-sidebar__header">
        <span onClick={toggleCart}>
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
          <Button
            onClick={() => {
              navigate("/");
              toggleCart();
            }}
            type="outline"
          >
            Start Shopping
          </Button>
        </div>
      )}

      {!empty && (
        <>
          <CartList cart={cart} />

          <div className="cart-sidebar__footer">
            <div className="cart-sidebar__quantity-box">
              <p>Subtotal</p>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <Button>Check out</Button>
            <Link
              to="/collections"
              onClick={toggleCart}
              className="cart-sidebar__link"
            >
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartSidebar;
