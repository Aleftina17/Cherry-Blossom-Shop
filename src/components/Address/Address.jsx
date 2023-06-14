import "./address.scss";

import mapIco from "./../../assets/img/address/map.svg";

const Address = () => {
  return (
    <section className="section-address">
      <div className="container">
        <div className="address">
          <div className="address__card">
            <img src={mapIco} alt="" className="address__card--img" />
            <div className="address__card--title">Сherry Blossom Address</div>
            <div className="address__card--address">
              6201 Hollywood blvd <br/> Los Angeles, California 90028
            </div>
            <div className="address__card--time">
              Monday - Friday 9:00 am - 8:00 pm <br/>Saturday 10:00 am - 5:00 pm<br/>
              Sunday 10:00 am - 5:00 pm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
