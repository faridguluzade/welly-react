/* eslint-disable react/prop-types */
import { useDeleteCart } from "../useDeleteCart";
import { useUpdateCart } from "../useUpdateCart";

import { formatCurrency } from "../../../utils/helpers";

import "./CartItem.scss";

function CartItem({ item }) {
  const { id, image, name, description, quantity, price } = item;
  const { deleteItem } = useDeleteCart();
  const { updateCart } = useUpdateCart();

  function increaseItemQuantity() {
    const newQuantity = quantity + 1;

    const updatedData = {
      quantity: newQuantity,
      totalPrice: newQuantity * price,
    };

    updateCart({ id, updatedData });
  }

  function decreaseItemQuantity() {
    const newQuantity = quantity - 1;

    if (newQuantity === 0) {
      deleteItem(id);
      return;
    }

    const updatedData = {
      quantity: newQuantity,
      totalPrice: newQuantity * price,
    };

    updateCart({ id, updatedData });
  }

  return (
    <div className="cart">
      <figure className="cart__photo-box">
        <img src={image} alt="" className="cart__photo" />
      </figure>
      <div className="cart__content-box">
        <h3 className="cart__name">{name}</h3>
        <p className="cart__desc">{description}</p>

        <div className="cart__future-box">
          <span className="cart__clear" onClick={() => deleteItem(id)}>
            Remove
          </span>
          <div className="cart__input-box">
            <span onClick={decreaseItemQuantity}>-</span>
            <span>{quantity}</span>
            <span onClick={increaseItemQuantity}>+</span>
          </div>
        </div>
      </div>
      <div className="cart__price">{formatCurrency(price)}</div>
    </div>
  );
}

export default CartItem;
