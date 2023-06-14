import "./top-rated.scss";

import topImg1 from "./../../assets/img/top-rated/top-1.jpg";
import topImg2 from "./../../assets/img/top-rated/top-2.jpg";
import topImg3 from "./../../assets/img/top-rated/top-3.jpg";
import topImg4 from "./../../assets/img/top-rated/top-4.jpg";
import topImg5 from "./../../assets/img/top-rated/top-5.jpg";
import topImg6 from "./../../assets/img/top-rated/top-6.jpg";

import Card from "../Card/Card";

const TopRated = () => {
  return (
    <section className="section-top-rated">
      <div className="container container--sm">
        <div className="top-rated">
          <h2 className="top-rated__title">TOP RATED</h2>
          <div className="top-rated__cards">

            <Card title='Cristal (pink carnations with mix flowers)' price='$125.00' img={topImg1}/>
            <Card title='Milana (bouquet with garden roses)' price='$245.00' img={topImg2}/>
            <Card title='Diamond bouquet pink roses' price='From $125.00' img={topImg3}/>
            <Card title='Bouquet Hyacinth pink' price='$150.00' img={topImg4}/>
            <Card title='Bouquet rose bush odilia' price='From $245.00' img={topImg5}/>
            <Card title='Bouquet of delicate carnation rose' price='From $210.00' img={topImg6}/>

          </div>

          <button className="btn btn--show-more">Show more</button>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
