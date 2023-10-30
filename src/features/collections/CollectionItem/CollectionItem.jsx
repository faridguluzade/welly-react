import { BasketIcon } from "../../../assets/icons/icons";

import "./CollectionItem.scss";

function CollectionItem({ item }) {
  const {
    id,
    name,
    description,
    imageFront,
    imageBack,
    regularPrice,
    salePrice,
    onSale,
    soldOut,
  } = item;
  return (
    <div className="collection">
      <figure className="collection__photo-box">
        <img
          src={imageFront}
          alt=""
          className="collection__photo collection__photo--front"
        />
        <img
          src={imageBack}
          alt=""
          className="collection__photo collection__photo--rear"
        />
      </figure>
      <div className="collection__content-box">
        <h3 className="collection__name">{name}</h3>
        <p className="collection__desc">{description}</p>
        <div className="collection__price-box">
          {onSale ? (
            <>
              <span className="collection__regular-price">{regularPrice}</span>
              <span className="collection__sale-price">{salePrice}</span>
            </>
          ) : (
            <span className="collection__regular-price">{regularPrice}</span>
          )}
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
