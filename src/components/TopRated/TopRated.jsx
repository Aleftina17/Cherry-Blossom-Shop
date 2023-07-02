import { useState } from "react";

import "./top-rated.scss";

import Card from "../Card/Card";
import productsData from "./../../data/products";

const TopRated = (props) => {
  const sortByRate = (a, b) => {
    return b.rate - a.rate;
  };

  const sortedProducts = [...productsData];

  sortedProducts.sort(sortByRate);

  const [showMore, setShowMore] = useState(false);

  const handleClickShowMore = () => {
    setShowMore(true);
  };

  const displayedProducts = showMore
    ? sortedProducts
    : sortedProducts.slice(0, 6);

  return (
    <section className="section-top-rated">
      <div className="container container--sm">
        <div className="top-rated">
          <h2 className="top-rated__title">TOP RATED</h2>
          <div className="top-rated__cards">
            {displayedProducts.map((product) => (
              <Card
                id={product.id}
                key={product.id}
                title={product.title}
                price={`$${product.price}`}
                isOnSale={product.isOnSale}
                discountPrice={`$${product.discountPrice}`}
                discount={`-${product.discount * 100}%`}
                img={product.img}
                amount={product.amount}
              />
            ))}
          </div>

          {!showMore && (
            <button
              className="btn btn--show-more"
              onClick={handleClickShowMore}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopRated;
