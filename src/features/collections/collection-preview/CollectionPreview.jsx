import { Fragment } from "react";

import { useCollections } from "../useCollections";

import CollectionList from "../collection-list/CollectionList";
import Heading from "../../../ui/heading/Heading";
import Spinner from "../../../ui/spinner/Spinner";

function CollectionPreview() {
  const { collections, isLoading } = useCollections();

  if (isLoading) return <Spinner />;

  return (
    <section className="collection-preview">
      {collections?.map((collection) => {
        return (
          <Fragment key={collection.id}>
            <Heading title={collection.title} subtitle={collection.subtitle} />
            <CollectionList products={collection.products} />
          </Fragment>
        );
      })}
    </section>
  );
}

export default CollectionPreview;
