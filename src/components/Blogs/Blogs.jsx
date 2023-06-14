import "./blogs.scss";

import CardBlog from "../CardBlog/CardBlog";

const Blogs = () => {
  return (
    <section className="section-blogs">
      <div className="container container--sm">
        <div className="blogs">
          <div className="blogs__title">OUR BLOGS</div>
          <div className="blogs__cards">
            <CardBlog
              title="In amet, mollis"
              text="Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. "
              img={require("./../../assets/img/our-blogs/blogs-1.jpg")}
            />
            <CardBlog
              title="Lorem dui non"
              text="Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. "
              img={require("./../../assets/img/our-blogs/blogs-2.jpg")}
            />
            <CardBlog
              title="Dictumst"
              text="Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. "
              img={require("./../../assets/img/our-blogs/blogs-3.jpg")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
