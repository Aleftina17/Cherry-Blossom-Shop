import { useRef } from "react";
import "./blogs.scss";
import blogsData from "../../data/blogs";
import CardBlog from "../CardBlog/CardBlog";

const Blogs = () => {
  const sliderRef = useRef(null);

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  return (
    <section className="section-blogs">
      <div className="container">
        <div className="blogs">
          <div className="blogs__title">OUR BLOGS</div>

          <div className="slider-wrapper">
            <button className="btn btn--prev" onClick={scrollPrev}></button>

            <div className="blogs__cards" ref={sliderRef}>
              {blogsData.map((blog) => (
                <CardBlog key={blog.id} title={blog.title} text={blog.text} img={blog.img} />
              ))}
            </div>

            <button className="btn btn--next" onClick={scrollNext}></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
