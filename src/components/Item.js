import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";
import "./Item.css";
import ItemDetail from "./ItemDetail";

const Item = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { image, title, description, id, stock = 0 } = item;

  return (
    <>
      <div
        className="card-body d-flex flex-column justify-content-center align-items-center rounded-3"
        onClick={() => {
          setTimeout(() => setShowDetails(true), 1000);
        }}
      >
        <img src={image} alt={title} className="item-image rounded-3" />
        <p>{title}</p>
        <small className="description">{description}</small>
      </div>
      {showDetails ? (
        <ItemDetail
          data={item}
          onClick={() => {
            setShowDetails(false);
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Item;
