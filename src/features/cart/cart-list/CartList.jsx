import CartItem from "../cart-item/CartItem";

import "./CartList.scss";

function CartList() {
  return (
    <div className="cart-list">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

export default CartList;
