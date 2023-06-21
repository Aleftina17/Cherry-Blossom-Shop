import "./card.scss";

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <a href="#!" className="card--link">
        <div className="card__img">
          <img src={props.img} alt="boquet" />
        </div>

        <div className="card__desc">

          <div className="card__desc__info">

            <div className="card__desc__info--title">{props.title}</div>

            {/* старая цена */}
            <span className={`card__desc__info--price ${ props.isOnSale ? "on-sale" : ""}`}>{props.price}</span>


            {/* скидка */}
            {props.discount && props.isOnSale && (
              <span className="card__desc__info--discount">
                &nbsp;&nbsp;&nbsp;{props.discount}
              </span>
            )}


            {/* новая цена */}
            {props.isOnSale && (
              <div className="card__desc__info--price--sale">
                {props.discountPrice}
              </div>
            )}
          </div>

          {props.amount !== 0 ? (
            <button className="btn btn--add-to-cart">Add to cart</button>
          ) : (
            <button className="btn btn--sold-out">Sold out</button>
          )}

        </div>
      </a>
    </div>
  );
};

export default Card;
