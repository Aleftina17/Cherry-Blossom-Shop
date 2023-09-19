import { useState } from "react";
import "./faq.scss";

import arrowDown from "./../../assets/img/faq/arrow-down.svg";

const Faq = () => {
  const faqData = [
    {
      question: "Can I order same day flower delivery?",
      answer:
        "Yes, you can place your order until 12pm to get it the same day, but if it’s later than 12pm, you can just call us and we will try to rearrange our schedule and deliver it on the same day.",
    },
    {
      question: "Do you deliver on Sundays?",
      answer:
        "Yes, we do. We deliver all Sunday long, you can order bouquets online for delivery or you can just call us and we will deliver your flowers to you.",
    },
    {
      question: " How much does flower delivery service cost?",
      answer:
        "We deliver up to 4 miles for free, 4-8 miles – $15, 8-20 miles - $20, 20-30 miles - $30 and 30-50 miles - $50.",
    },
    {
      question: "How long does it take to deliver flowers?",
      answer:
        "Usually we deliver during the day, but when you order online, you could pick time slots – for example – from 8am to 12pm and we will deliver at the given time. Also, if you need bouquets delivered at an exact time, just call us at +214 772 56 74 and we will try to do our best to deliver them to you at the time of your choosing.",
    },
    {
      question: "Can I pick up flowers from the shop?",
      answer:
        "Yes, sure! You are always welcome at our shop but if you live near our location remember, you can order flowers with free shipping.",
    },
    {
      question: "Can I order flower delivery for tomorrow?",
      answer:
        "Yes, you can place your order online until midnight or call our shop until 6pm to place your order and get your delivery on the next day.",
    },
    {
      question: "Where do you deliver flowers?",
      answer:
        "We deliver to West Hollywood, North Hollywood, Beverly Hills, Santa Monica, Pasadena, Encino, Bel Air, Brentwood, Sherman Oaks, Manhattan Beach, El Segundo, Marina del Rey, Culver City, Koreatown, Downtown LA, Palms, Van Nuys, Glendale, Studio City, Venice, Pacific Palisades and Malibu.",
    },

    {
      question: "Can I create my own bouquet?",
      answer:
        "Yes, we have so many fresh arrangements every day, you are more than welcome to come, pick the flowers you like and we will make a bouquet or flower arrangement from them for you. You can always visit our flower workshop and enjoy the feeling atmosphere of making a flower arrangement with florists step by step.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-faq">
      <div className="container container--sm">
        <div className="faq">
          <h3 className="faq__title">Frequently Asking Questions</h3>
          <ul className="faq__list">
            {faqData.map((item, index) => (
              <li className="faq__list__item" key={index}>
                <div className="faq__question">
                  <a href="#!"
                    className={`faq__question--toggler ${
                      openIndex === index ? "open" : ""
                    }`}
                    onClick={() => toggleAnswer(index)}
                  >
              
                    <span>{item.question}</span>
                    <img src={arrowDown} alt="open/close" />

                  </a>
                </div>

                <div
                  className={`faq__answer ${
                    openIndex === index ? "" : "hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
