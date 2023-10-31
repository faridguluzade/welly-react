import "./CartItem.scss";

function CartItem() {
  return (
    <div className="cart">
      <figure className="cart__photo-box">
        <img
          src="https://www.getwelly.com/cdn/shop/products/flexible-fabric-bandage-family-pack-thumb_720x.jpg?v=1674852702"
          alt=""
          className="cart__photo"
        />
      </figure>
      <div className="cart__content-box">
        <h3 className="cart__name">Biggie Space Flexible </h3>
        <p className="cart__desc">Assorted Flex Fabric Bandages, 15 count</p>

        <div className="cart__future-box">
          <span className="cart__clear">Remove</span>
          <div className="cart__input-box">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="cart__price">$7.99</div>
    </div>
  );
}

export default CartItem;
