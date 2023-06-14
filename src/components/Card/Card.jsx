import './card.scss'


const Card = (props) => {
    return ( 
        <div className="top-rated__card card">
              <div className="card__img">
                <img src={props.img} alt="boquet" />
              </div>

              <div className="card__desc">
                <div className="card__desc__info">
                  <div className="card__desc__info--title">
                    {props.title}
                  </div>
                  <div className="card__desc__info--price">{props.price}</div>
                </div>

                <button className="btn btn--add-to-cart">Add to cart</button>
              </div>
            </div>
     );
}
 
export default Card;