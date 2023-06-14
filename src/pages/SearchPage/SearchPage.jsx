import Navigation from "../../components/Navigation/Navigation";
import "./search-page.scss";
import loupe from "./../../assets/img/navbar/loupe-icon.svg";

const SearchPage = () => {
  return (
    <section className="section-search-page">
      <div className="container">
        <Navigation title="Search" />
      </div>
      <div className="search-page">
        <div className="search-page__title">Search</div>
        <div className="search-page__search-wrapper">
          <input type="search" placeholder="Search our store" className="search" />

          <button className="search-submit">
            <img src={loupe} alt="search" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
