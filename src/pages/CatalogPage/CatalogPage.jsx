import { useState } from "react";

import Navigation from "../../components/Navigation/Navigation";
import Card from "../../components/Card/Card";

import "./catalog-page.scss";
import productsData from "../../data/products";

const CatalogPage = () => {
  const [sortOption, setSortOption] = useState("value1");

  // Функция обработки изменения значения в select

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Функция для сортировки по цене: от наименьшей к наибольшей

  const sortByPriceLowToHigh = (a, b) => {
    return a.discountPrice - b.discountPrice;
  };

  // Функция для сортировки по цене: от наибольшей к наименьшей

  const sortByPriceHighToLow = (a, b) => {
    return b.discountPrice - a.discountPrice;
  };

  // Функция для сортировки по дате: от новых к старым

  const sortByDate = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  };

  // Функция для сортировки по дате: от новых к старым

  const sortByRate = (a, b) => {
    return b.rate - a.rate;
  };
  

  // Копия отсортированного массива продуктов в соответствии с выбранной опцией сортировки
  const sortedProducts = [...productsData];

  if (sortOption === "value3") {
    sortedProducts.sort(sortByPriceLowToHigh);
  } else if (sortOption === "value4") {
    sortedProducts.sort(sortByPriceHighToLow);
  } else if (sortOption === "value2") {
    sortedProducts.sort(sortByDate);
  } else if (sortOption === "value1") {
    sortedProducts.sort(sortByRate);
  }

  return (
    <section className="scetion-catalog-page">
      <div className="container">
        <Navigation title="Catalog" />
        <div className="catalog-page">
          <h3 className="catalog-page__title">Catalog</h3>
          <div className="container container--sm">
            <div className="catalog-page__content">
              <div className="catalog-page__filter">
                <span className="filter__sort"> Sort by:</span>
                <select
                  className="filter__select"
                  name="filter"
                  id="filter"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="value1">Best selling</option>
                  <option value="value2">Newest arrivals</option>
                  <option value="value3">Price: low to high</option>
                  <option value="value4">Price: high to low</option>
                </select>
                <span className="filter__quantity">
                  {sortedProducts.length} products
                </span>
              </div>

              <div className="catalog-page__cards">
                {sortedProducts.map((product) => (
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
                  className='catalog-page__card'
                />
                ))}
              </div>

              <div className="catalog-page__pagination">
                1 - 9 of {sortedProducts.length} products
              </div>
              <button className="btn btn--load-more">Load more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
