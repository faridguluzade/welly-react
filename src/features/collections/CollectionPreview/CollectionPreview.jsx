import CollectionList from "../CollectionList/CollectionList";
import Heading from "../../../ui/Heading/Heading";

import { DUMMY_COLLECTIONS } from "../../../constants/constant";
import { Fragment } from "react";

function CollectionPreview() {
  return (
    <div className="collection-preview">
      {DUMMY_COLLECTIONS.map((collection) => {
        return (
          <Fragment key={collection.id}>
            <Heading title={collection.title} subtitle={collection.subtitle} />
            <CollectionList items={collection.items} /> ;
          </Fragment>
        );
      })}
    </div>
  );
}

export default CollectionPreview;
