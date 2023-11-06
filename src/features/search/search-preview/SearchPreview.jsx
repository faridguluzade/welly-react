import { useSearchParams, useNavigate } from "react-router-dom";

import { useSearch } from "../useSearch";

import CollectionList from "../../collections/collection-list/CollectionList";
import Button from "../../../ui/button/Button";
import Spinner from "../../../ui/spinner/Spinner";

import "./SearchPreview.scss";

function SearchPreview() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("name");

  const { products, isLoading } = useSearch(searchValue);
  const empty = products?.length === 0;

  if (isLoading) return <Spinner />;

  if (!searchValue)
    return (
      <div className="search-preview__content">
        <h2>Oops!</h2>
        <p>Search for products on our site</p>
      </div>
    );

  return (
    <section className="search-preview">
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
      {!empty && <CollectionList products={products} />}
    </section>
  );
}

export default SearchPreview;
