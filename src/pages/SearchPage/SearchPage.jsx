import React, { useState } from "react";
import { Suspense, lazy } from "react";
import { NavLink } from "react-router-dom";
import memoizeOne from "memoize-one";

import "./search-page.scss";
import loupe from "./../../assets/img/navbar/loupe-icon.svg";

import productsData from "./../../data/products";

const Navigation = lazy(() => import("../../components/Navigation/Navigation"));

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = memoizeOne((e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSuggestions([]);
    } else {
      const lowercaseQuery = query.toLowerCase();
      const filteredSuggestions = productsData.filter((product) =>
        product.title.toLowerCase().includes(lowercaseQuery)
      );
      setSuggestions(filteredSuggestions);
    }
  });

  const higlightMatchingLetters = (title, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    return title.replace(regex, "<mark>$1</mark>");
  };

  return (
    <section className="section-search-page">
      <div className="container">
        <Suspense fallback={<h5>Loading...</h5>}>
          <Navigation title="Search" />
        </Suspense>
      </div>
      <div className="search-page">
        <h3 className="search-page__title">Search</h3>

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
                  <NavLink to={`/product/${product.id}`}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: higlightMatchingLetters(
                          product.title,
                          searchQuery
                        ),
                      }}
                    ></div>
                  </NavLink>
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
