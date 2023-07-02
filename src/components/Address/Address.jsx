import "./address.scss";
import mapIco from "./../../assets/img/address/map.svg";

const Address = () => {
  return (
    <section className="section-address">
      <div className="container">
        <div className="address">
          <div className="address__card">
            <img src={mapIco} alt="map" className="address__card--img" />
            <h4 className="address__card--title">Сherry&nbsp;Blossom Address</h4>
            <div className="address__card--address">
              <a href="https://www.google.com/maps/place/6201+Hollywood+Blvd,+Los+Angeles,+CA+90028,+%D0%A1%D0%A8%D0%90/@34.1020052,-118.3266243,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2bf388c7ae5e9:0xe05f67f23c04e791!8m2!3d34.1020008!4d-118.3240494!16s%2Fg%2F11cp5hj2qn?entry=ttu">
              6201 Hollywood blvd <br /> Los Angeles, California 90028
              </a>
            </div>
            <div className="address__card--time">
              Monday - Friday 9:00 am - 8:00 pm <br />
              Saturday 10:00 am - 5:00 pm
              <br />
              Sunday 10:00 am - 5:00 pm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
