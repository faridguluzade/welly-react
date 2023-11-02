/* eslint-disable react/prop-types */
import { useDeleteCart } from "../useDeleteCart";
import "./CartItem.scss";

function CartItem({ item }) {
  const { id, image, name, description, quantity, price } = item;
  const { deleteItem } = useDeleteCart();

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
            <span>-</span>
            <span>{quantity}</span>
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="cart__price">{price}</div>
    </div>
  );
}

export default CartItem;
