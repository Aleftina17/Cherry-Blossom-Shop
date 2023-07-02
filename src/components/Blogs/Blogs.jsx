import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./blogs.scss";
import blogsData from "../../data/blogs";
import CardBlog from "../CardBlog/CardBlog";

const Blogs = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="section-blogs">
      <div className="container">
        <div className="blogs">
          <h4 className="blogs__title">OUR BLOGS</h4>

          <div className="slider-wrapper">
            <div className="btn btn--prev" onClick={scrollPrev}></div>

            <Slider {...settings} ref={sliderRef} className="blogs__cards">
              {blogsData.map((blog) => (
                <div key={blog.id}>
                  <CardBlog
                    title={blog.title}
                    text={blog.text}
                    img={blog.img}
                  />
                </div>
              ))}
            </Slider>

            <div className="btn btn--next" onClick={scrollNext}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
