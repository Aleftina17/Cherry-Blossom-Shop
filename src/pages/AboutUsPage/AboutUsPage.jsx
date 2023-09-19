import { lazy, Suspense } from "react";

import "./about-us.scss";

import aboutUsImg from "./../../assets/img/about-us/about-us.jpg";

const Navigation = lazy(() => import("../../components/Navigation/Navigation"));
const Blogs = lazy(() => import("../../components/Blogs/Blogs"));
const Subscribe = lazy(() => import("../../components/Subscribe/Subscribe"));

const AboutUs = () => {
  return (
    <section className="section-about-us">
      <div className="container">
        <Suspense fallback={<h5>Loading...</h5>}>
          <Navigation title="About Us" />
        </Suspense>
        <div className="about-us">
          <h3 className="about-us__title">ABOUT US</h3>
        </div>
      </div>
      <img
        src={aboutUsImg}
        alt="About us"
        className="section-about-us__img"
      />
      <div className="container container--sm">
        <div className="about-us">
          <div className="about-us__text">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.
          </div>
          <div className="about-us__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <Suspense fallback={<h5>Loading...</h5>}>
        <Blogs />
      </Suspense>
      <Suspense fallback={<h5>Loading...</h5>}>
        <Subscribe />
      </Suspense>
    </section>
  );
};

export default AboutUs;
