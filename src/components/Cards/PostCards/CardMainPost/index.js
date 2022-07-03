export default function CardMainPost(props) {
  const { title, price, country, description, category = [] } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{country}</p>
      <p>{description}</p>
    </div>
  );
}
