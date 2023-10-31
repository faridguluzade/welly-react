import { Fragment } from "react";

import Heading from "../../../ui/Heading/Heading";
import CollectionList from "../collection-list/CollectionList";

import { DUMMY_COLLECTIONS } from "../../../constants/constant";

function CollectionPreview() {
  return (
    <section className="collection-preview">
      {DUMMY_COLLECTIONS.map((collection) => {
        return (
          <Fragment key={collection.id}>
            <Heading title={collection.title} subtitle={collection.subtitle} />
            <CollectionList items={collection.items} />
          </Fragment>
        );
      })}
    </section>
  );
}

export default CollectionPreview;
