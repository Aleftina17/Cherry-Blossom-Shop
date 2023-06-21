import { useState } from "react";

import "./special-offer.scss";
import Card from './../Card/Card'
import products  from "./../../data/products";

const SpecialOffer = () => {


    const sortedProducts = products.filter((product) => product.isOnSale);
    
      const [showMore, setShowMore] = useState(false);
    
      const handleClickShowMore = () => {
        setShowMore(true);
      };
    
      const displayedProducts = showMore ? sortedProducts : sortedProducts.slice(0, 3);
    

  return (
    <section className="section-special-offer">
      <div className="container">
        <div className="special-offer">
        <div className="special-offer__title">Special offer</div>
        <div className="special-offer__cards">

        {displayedProducts.map((product) => (
              <Card
                key={product.title}
                title={product.title}
                price={`$${product.price}`}
                isOnSale={product.isOnSale}
                discountPrice={`$${product.discountPrice}`}
                discount={`-${product.discount * 100}%`}
                img={product.img}
                amount={product.amount}
                className="special-offer__card"
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

export default SpecialOffer;
