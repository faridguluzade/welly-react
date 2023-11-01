/* eslint-disable react/prop-types */
import CartItem from "../cart-item/CartItem";

import "./CartList.scss";

function CartList({ cart }) {
  return (
    <div className="cart-list">
      {cart?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartList;
