/* eslint-disable react/prop-types */
import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionList.scss";

// eslint-disable-next-line react/prop-types
function CollectionList({ items }) {
  console.log(items);
  return (
    <div className="container collection-list">
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CollectionList;
