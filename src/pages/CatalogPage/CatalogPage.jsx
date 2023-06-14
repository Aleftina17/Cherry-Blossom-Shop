import Navigation from "../../components/Navigation/Navigation";
import Card from "../../components/Card/Card";
import "./catalog-page.scss";

import topImg1 from "./../../assets/img/top-rated/top-1.jpg";

const CatalogPage = () => {
  return (
    <section className="scetion-catalog-page">
      <div className="container">
        <Navigation title="Catalog" />
          <div className="catalog-page">
            <div className="catalog-page__title">Catalog</div>
            <div className="container container--sm">
            <div className="catalog-page__content">
                
              <div className="catalog-page__filter">
                Sort by:
                
                
                <select className="filter__select" name="filter" id="filter" defaultValue="value1">
                    
                  <option value="value1" >Best selling</option>
                  <option value="value2">
                    Newest arrivals
                  </option>
                  <option value="value3">Price: low to high</option>
                  <option value="value4">Price: high to low</option>

                </select>

                <span className="filter__quantity">547 products</span>
              </div>

              <div className="catalog-page__cards">
                <Card
                  title="Cristal (pink carnations with mix flowers)"
                  price="$125.00"
                  img={topImg1}
                />
                <Card
                  title="Cristal (pink carnations with mix flowers)"
                  price="$125.00"
                  img={topImg1}
                />
                <Card
                  title="Cristal (pink carnations with mix flowers)"
                  price="$125.00"
                  img={topImg1}
                />
                <Card
                  title="Cristal (pink carnations with mix flowers)"
                  price="$125.00"
                  img={topImg1}
                />
                <Card
                  title="Cristal (pink carnations with mix flowers)"
                  price="$125.00"
                  img={topImg1}
                />
                <Card
                  title="Cristal (pink carnations with mix flowers)"
                  price="$125.00"
                  img={topImg1}
                />
                <Card
                  title="Cristal (pink carnations with mix flowers)"
                  price="$125.00"
                  img={topImg1}
                />
                <Card
                  title="Cristal (pink carnations with mix flowers)"
                  price="$125.00"
                  img={topImg1}
                />
                <Card
                  title="Cristal (pink carnations with mix flowers)"
                  price="$125.00"
                  img={topImg1}
                />
              </div>

              <div className="catalog-page__pagination">1 - 9 of 517 products</div>
              <button className="btn btn--load-more">Load more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
