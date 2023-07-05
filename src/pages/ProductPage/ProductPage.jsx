import { useState, useContext, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../components/CartContext/CartContext";
import "./product-page.scss";

import QuantityInput from "../../components/QuantityInput/QuantityInput";
import SizeSelect from "../../components/SizeSelect/SizeSelect";
import productsData from "../../data/products";

const Navigation = lazy(() => import("../../components/Navigation/Navigation"));
const ContinueShoping = lazy(() =>
  import("../../components/ContinueShoping/ContinueShoping")
);

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = productsData.find((product) => product.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");

  const handleAddToCart = () => {
    const productToAdd = {
      title: product.title,
      price: `$${product.discountPrice}`,
      img: product.img,
      quantity: quantity,
      size: selectedSize,
    };
    addToCart(productToAdd);
  };

  if (!product) {
    return (
      <section className="section-product-page">
        <div className="container">
          <Navigation title="Unknown" />
          <div className="product">
            <div className="product__info--title">Product not found</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-product-page">
      <div className="container">
        <div className="product-page__header">
          <Suspense fallback={<h5>Loading...</h5>}>
            <Navigation title={product.title} />
            <ContinueShoping />
          </Suspense>
        </div>

        <div className="product">
          <div className="product__img">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="product__info">
            <div className="product__info--title">{product.title}</div>
            <div className="product__info--price">
              <span
                className={`product__info--price--init ${
                  product.isOnSale ? "on-sale" : ""
                }`}
              >
                {`$${product.price}`}
              </span>

              {product.isOnSale && (
                <span className="product__info--price--discount">
                  &nbsp;&nbsp;&nbsp;{`-${product.discount * 100}%`}
                </span>
              )}

              {product.isOnSale && (
                <div className="product__info--price--sale">
                  {`$${product.discountPrice}`}
                </div>
              )}
            </div>
            <div className="product__info--desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              dolore atque totam recusandae aperiam. Odit, unde. Aperiam maxime,
              quibusdam fuga perspiciatis cumque, quisquam, animi eos facere
              illum nemo quasi possimus.
            </div>
            <div className="product__info--inputs">
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />

              <SizeSelect
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </div>

            {product.amount !== 0 ? (
              <button
                className="btn btn--add-to-cart"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            ) : (
              <button className="btn btn--sold-out">Sold out</button>
            )}

            <div className="product__info--pickup">
              Pickup available at <a href="#!">Hollywood blvd</a> <br /> Usually
              ready in tomorrow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
