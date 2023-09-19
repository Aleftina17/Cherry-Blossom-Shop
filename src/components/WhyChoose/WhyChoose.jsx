import "./why-choose.scss";
import cursorImg from "./../../assets/img/why-choose/cursor.svg";
import timeImg from "./../../assets/img/why-choose/time.svg";
import worldImg from "./../../assets/img/why-choose/world.svg";

const WhyChoose = () => {
  return (
    <section className="section-why-choose">
      <div className="container">
        <div className="why-choose">
          <h2 className="why-choose__title">why choose us?</h2>
          <div className="why-choose__cards">
            
            <div className="why-choose__card">
              <div className="why-choose__card__header">
                <div className="why-choose__card--title">Extensive сhoice</div>
                <img src={cursorImg} alt="cursor" />
              </div>
              <div className="why-choose__card--desc">
                We have a huge selection of the most beautiful flowers in town.
                Our flower shop stocks all types of flowers, including roses,
                tulips, lilies, and more!
              </div>
            </div>

            <div className="why-choose__card">
              <div className="why-choose__card__header">
                <div className="why-choose__card--title">Fast delivery</div>
                <img src={timeImg} alt="cursor" />
              </div>
              <div className="why-choose__card--desc">
                When it comes to delivering flowers as fast as possible, we
                don't mess around. We also provide next-day delivery from our
                store to your door.
              </div>
            </div>

            <div className="why-choose__card">
              <div className="why-choose__card__header">
                <div className="why-choose__card--title">Online ordering</div>
                <img src={worldImg} alt="cursor" />
              </div>
              <div className="why-choose__card--desc">
                All you need to do is select the type and quantity of what you
                want online - we'll take care of the rest! Our team is online
                24/7 with clients.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
