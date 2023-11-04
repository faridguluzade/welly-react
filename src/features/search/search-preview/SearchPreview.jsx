import { useSearchParams, useNavigate } from "react-router-dom";

import { useSearch } from "../useSearch";

import CollectionList from "../../collections/collection-list/CollectionList";
import Button from "../../../ui/button/Button";

import "./SearchPreview.scss";

function SearchPreview() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("name");

  const { products } = useSearch(searchValue);
  const empty = products?.length === 0;

  if (!searchValue)
    return (
      <div className="search-preview__content">
        <h2>Oops!</h2>
        <p>Search for products on our site</p>
      </div>
    );

  return (
    <div className="search-preview">
      <div className="search-preview__content">
        <>
          {empty && <h2>Oops!</h2>}
          <p>
            {products?.length} results for "{searchValue}"
          </p>
          {empty && (
            <Button onClick={() => navigate("/collections")} type="outline">
              View our Products
            </Button>
          )}
        </>
      </div>

      {products?.length && <CollectionList products={products} />}
    </div>
  );
}

export default SearchPreview;
