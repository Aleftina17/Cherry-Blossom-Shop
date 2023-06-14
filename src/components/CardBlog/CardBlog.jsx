import "./card-blog.scss";

const CardBlog = (props) => {
  return (
    <div className="card card-blog">
      <a href="#!" className="cadr-blog--link">
      <div className="card-blog__img">
        <img src={props.img} alt="blog" />
      </div>
      <div className="card-blog__info">
        <div className="card-blog__info--title">{props.title}</div>
        <div className="card-blog__info--desc">{props.text}</div>
      </div>
      </a>
    </div>
  );
};

export default CardBlog;
