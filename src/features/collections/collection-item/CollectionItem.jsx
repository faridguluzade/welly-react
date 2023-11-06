/* eslint-disable react/prop-types */
import { useAddCart } from "../../cart/useAddCart";
import { useAnimate } from "../../../hooks/useAnimate";
import { formatCurrency } from "../../../utils/helpers";

import { BasketIcon } from "../../../assets/icons/icons";
import SpinnerMini from "../../../ui/spinner-mini/SpinnerMini";

import "./CollectionItem.scss";

function CollectionItem({ item, animation }) {
  const {
    id,
    name,
    description,
    imageFront,
    imageBack,
    regularPrice,
    salePrice,
    onSale,
  } = item;

  useAnimate();
  const { addItemToCart, isLoading } = useAddCart();

  function handleAddItem() {
    const price = onSale ? salePrice : regularPrice;

    addItemToCart({
      name,
      description,
      image: imageFront,
      price,
      productId: id,
    });
  }

  return (
    <div data-aos={animation} className="collection">
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
              <span className="collection__sale-price">
                {formatCurrency(regularPrice)}
              </span>
              <span className="collection__regular-price">
                {formatCurrency(salePrice)}
              </span>
            </>
          ) : (
            <span className="collection__regular-price">
              {formatCurrency(regularPrice)}
            </span>
          )}
        </div>

        <button
          disabled={isLoading}
          style={{
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
          className="collection__btn"
          onClick={handleAddItem}
        >
          {isLoading && <SpinnerMini />}
          {!isLoading && <BasketIcon className="collection__basket-icon" />}
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default CollectionItem;
