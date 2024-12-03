import FilterBar from "../components/FilterBar";
import ListingsContainer from "../components/ListingsContainer";

// const Header = () => <>IM HEADER</>;
// const Search = () => <>IM SEARCH</>;
// const Listings = () => <>IM LISTINGS</>;

export default function AccommodationListings() {
  return (
    <div>
      <h1>Accommodation Listings</h1>
      <FilterBar />
      <ListingsContainer />
    </div>
  );
}
