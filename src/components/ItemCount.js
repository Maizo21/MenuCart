import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemCount({ stock = 0, initial }) {
  const [items, setState] = useState({
    stock: stock,
    initial: stock > 0 ? 1 : 0,
  });

  const addItem = () => {
    if (items.initial < items.stock) {
      setState({ ...items, initial: items.initial + 1 });
    }
  };

  const removeItem = () => {
    if (items.initial > 1) {
      setState({ ...items, initial: items.initial - 1 });
    }
  };

  const onAdd = () => {
    alert(
      `Se ${
        items.initial > 1
          ? `agregaron ${items.initial} items`
          : `agrego ${items.initial} item`
      }`
    );
  };

  return (
    <>
      <div className="gap-2 p-2 rounded d-flex flex-column justify-content-center">
        <div className="d-flex gap-3 align-items-center group ">
          <div
            className={`btn ${
              items.initial === 1 ? "btn-secondary" : "btn-danger"
            }`}
            onClick={() => {
              removeItem();
            }}
          >
            -
          </div>
          <div className="text-center">{items.initial}</div>
          <div
            className={`btn ${
              items.initial >= items.stock ? "btn-secondary" : "btn-primary"
            }`}
            onClick={() => {
              addItem();
            }}
          >
            +
          </div>
        </div>
        <div
          className="col-auto btn btn-success"
          onClick={() => {
            onAdd();
          }}
        >
          Add to cart
        </div>
      </div>
    </>
  );
}

export default ItemCount;
