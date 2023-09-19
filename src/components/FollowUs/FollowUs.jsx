import "./follow-us.scss";

import instScreen from "./../../assets/img/follow-us/follow-us.jpg";

const FollowUs = () => {
  return (
    <section className="section-follow-us">
      <div className="container">
        <div className="follow-us">
          <h3 className="follow-us__title">FOLLOW US ON&nbsp;INSTAGRAM</h3>
          <a href="#!" className="follow-us__link">
            @CHERRYBLOSSOM.LA
          </a>
          <div className="follow-us__inst-screen">
            <a href="#!">
            <img src={instScreen} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
