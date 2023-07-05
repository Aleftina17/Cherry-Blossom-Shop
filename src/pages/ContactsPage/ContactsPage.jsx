import React, { lazy, Suspense } from "react";
import ReactPlayer from "react-player";
import "./contacts-page.scss";

const Navigation = lazy(() => import("../../components/Navigation/Navigation"));
const Address = lazy(() => import("../../components/Address/Address"));
const Subscribe = lazy(() => import("../../components/Subscribe/Subscribe"));

const ContactsPage = () => {
  return (
    <section className="section-contacts-page">
      <div className="container">
        <Suspense fallback={<h5>Loading...</h5>}>
          <Navigation title="Contacts" />
        </Suspense>
      </div>
      <div className="contacts-page">
        <div className="contacts-page__address">
          <h3 className="contacts-page__title">Contacts</h3>
          <Suspense fallback={<h5>Loading...</h5>}>
            <Address />
          </Suspense>
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
              <form className="contacts-page__form" id="contactForm">
                <div className="contacts-page__form--user-info">
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    autoComplete="name"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    id="email"
                    autoComplete="email"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    id="phoneNumber"
                    autoComplete="tel"
                  />
                </div>
                <div className="contacts-page__form--message">
                  <textarea
                    placeholder="Enter your text..."
                    id="message"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<h5>Loading...</h5>}>
        <Subscribe />
      </Suspense>
    </section>
  );
};

export default ContactsPage;
