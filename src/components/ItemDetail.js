import React from "react";
import ItemCount from "./ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemDetail = ({ data, onClick }) => {
  const { image, title, description, id, stock = 0 } = data;

  return (
    <>
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClick}
              ></button>
            </div>
            <div className="modal-body text-dark">
              <div className="d-flex flex-column justify-content-center align-items-center rounded-3">
                <img src={image} alt={title} className="item-image rounded-3" />
                <p>{title}</p>
                <small className="description">{description}</small>

                <div className="d-flex">
                  <ItemCount stock={stock} />
                </div>
                <small>Stock {stock}</small>
                <small>id {id}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
