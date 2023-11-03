import CollectionPreview from "../features/collections/collection-preview/CollectionPreview";
import { useSearch } from "../features/search/useSearch";

function Collections() {
  const { products } = useSearch();

  console.log(products);

  return <CollectionPreview />;
}

export default Collections;
