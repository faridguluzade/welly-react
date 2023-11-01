import { Fragment } from "react";

import { useCollections } from "../useCollections";

import Heading from "../../../ui/heading/Heading";
import CollectionList from "../collection-list/CollectionList";

function CollectionPreview() {
  const { collections } = useCollections();

  return (
    <section className="collection-preview">
      {collections?.map((collection) => {
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
