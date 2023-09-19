import { lazy, Suspense } from "react";

const Hero = lazy(() => import("../../components/Hero/Hero"));
const TopRated = lazy(() => import("../../components/TopRated/TopRated"));
const Collections = lazy(() => import("../../components/Collections/Collections"));
const WhyChoose = lazy(() => import("../../components/WhyChoose/WhyChoose"));
const Subscribe = lazy(() => import("../../components/Subscribe/Subscribe"));
const Faq = lazy(() => import("../../components/Faq/Faq"));
const FollowUs = lazy(() => import("../../components/FollowUs/FollowUs"));
const Blogs = lazy(() => import("../../components/Blogs/Blogs"));
const Address = lazy(() => import("../../components/Address/Address"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<h5>Loading...</h5>}>
        <Hero />
        <TopRated />
        <Collections />
        <WhyChoose />
        <Subscribe />
        <Faq />
        <FollowUs />
        <Blogs />
        <Address />
      </Suspense>
    </>
  );
};

export default Home;
