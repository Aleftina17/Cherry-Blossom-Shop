import ReactPlayer from "react-player";

import "./contacts-page.scss";

import Navigation from "../../components/Navigation/Navigation";
import Address from "../../components/Address/Address";
import Subscribe from "../../components/Subscribe/Subscribe";

const ContactsPage = () => {
  return (
    <section className="section-contacts-page">
      <div className="container">
        <Navigation title="Contacts" />
      </div>
      <div className="contacts-page">

        <div className="contacts-page__address">
          <h3 className="contacts-page__title">Contacts</h3>
          <Address />
        </div>

        <div className="contacts-page__video">
          <div className="container container--sm">
            <h3 className="contacts-page__title">How to get to us?</h3>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=qkw-P2BDsPw"
            />
          </div>
        </div>

        <div className="contacts-page__write">
          <h3 className="contacts-page__title">WRITE TO US</h3>
          <div className="contacts-page__form--wrapper">
          <div className="container container--sm">
            <form  className="contacts-page__form" id="contactForm">
                <div className="contacts-page__form--user-info">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email" />
                    <input type="number" placeholder="Phone number" />
                </div>
                <div className="contacts-page__form--message">
                    <textarea placeholder="Enter your text..."></textarea>
                </div>
            </form>
          </div>
          </div>
        </div>

      </div>
      <Subscribe />
    </section>
  );
};

export default ContactsPage;
