import { BasketIcon } from "../../../assets/icons/icons";

import "./CollectionItem.scss";

function CollectionItem() {
  return (
    <div className="collection">
      <figure className="collection__photo-box">
        <img
          src="https://www.getwelly.com/cdn/shop/products/camping_thumb_bceec392-ee79-46d0-bc00-e3faf7345864_720x.jpg?v=1646347525"
          alt=""
          className="collection__photo collection__photo--front"
        />
        <img
          src="https://www.getwelly.com/cdn/shop/products/camping_rollover_720x.jpg?v=1646347525"
          alt=""
          className="collection__photo collection__photo--rear"
        />
      </figure>
      <div className="collection__content-box">
        <h3 className="collection__title">Camping Bravery Badges</h3>
        <p className="collection__subtitle">Assorted Flex Fabric Bandages</p>
        <div className="collection__price-box">
          <span className="collection__sale-price">7.99</span>
          <span className="collection__regular-price">7.99</span>
        </div>

        <button className="collection__btn">
          <BasketIcon className="collection__basket-icon" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default CollectionItem;
