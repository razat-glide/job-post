export default function CardMainPost(props) {
  const { logo, title, price, country, description, category = [] } = props;
  return (
    <div className="card-main-post">
      <div>
        <img src={logo} alt={title} />
      </div>
      <div>
        <div>
          <h3 className="title">{title}</h3>
          <p className="price">{price}</p>
        </div>
        <p>{country}</p>
        <p>{description}</p>
        {/* <div className="categories">
          {category.map((data) => (
            <span className="category-name">{data?.name}</span>
          ))}
        </div> */}
      </div>
    </div>
  );
}
