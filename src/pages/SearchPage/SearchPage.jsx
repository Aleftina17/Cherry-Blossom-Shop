import { useState } from "react";

import Navigation from "../../components/Navigation/Navigation";
import "./search-page.scss";
import loupe from "./../../assets/img/navbar/loupe-icon.svg";

import productsData from "./../../data/products";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = productsData.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const higlightMatchingLetters = (title, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    return title.replace(regex, "<mark>$1</mark>");
  };

  return (
    <section className="section-search-page">
      <div className="container">
        <Navigation title="Search" />
      </div>
      <div className="search-page">
        <div className="search-page__title">Search</div>

        <div className="search-page__search-wrapper">
          <input
            type="search"
            placeholder="Search at our store"
            className="search"
            value={searchQuery}
            onChange={handleInputChange}
          />

          <button className="search-submit">
            <img src={loupe} alt="search" />
          </button>

          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((product) => (
                <li key={product.id}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: higlightMatchingLetters(
                        product.title,
                        searchQuery
                      ),
                    }}
                  ></div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
