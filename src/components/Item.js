import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";
import "./Item.css";

const Item = ({ item }) => {
  console.log(item);
  const { image, title, description, id, stock = 0 } = item;
  return (
    <>
      <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-3">
        <img src={image} alt={title} className="item-image rounded-3" />
        <p>{title}</p>
        <small className="description">{description}</small>

        <div className="d-flex">
          <ItemCount stock={stock} />
        </div>
        <small>Stock {stock}</small>
        <small>id {id}</small>
      </div>
    </>
  );
};

export default Item;
