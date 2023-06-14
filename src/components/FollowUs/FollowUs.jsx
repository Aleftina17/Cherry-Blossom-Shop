import "./follow-us.scss";

import instScreen from "./../../assets/img/follow-us/follow-us.jpg";

const FollowUs = () => {
  return (
    <section className="section-follow-us">
      <div className="container">
        <div className="follow-us">
          <div className="follow-us__title">FOLLOW US ON INSTAGRAM</div>
          <a href="#!" className="follow-us__link">
            @CHERRYBLOSSOM.LA
          </a>
          <div className="follow-us__inst-screen">
            <img src={instScreen} alt="instagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
