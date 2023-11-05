/* eslint-disable react/prop-types */
import CollectionItem from "../collection-item/CollectionItem";

import "./CollectionList.scss";

// eslint-disable-next-line react/prop-types
function CollectionList({ products }) {
  return (
    <div className="container collection-list">
      {products?.map((item) => (
        <CollectionItem key={item.id} item={item} animation="fade-up" />
      ))}
    </div>
  );
}

export default CollectionList;
