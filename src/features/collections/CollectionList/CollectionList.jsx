import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionList.scss";

function CollectionList() {
  return (
    <div className="container collection-list">
      <CollectionItem />
      <CollectionItem />
      <CollectionItem />
      <CollectionItem />
    </div>
  );
}

export default CollectionList;
