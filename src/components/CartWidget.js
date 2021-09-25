import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({ numItems = 0 }) => {
  return (
    <>
      <div className="btn btn-dark d-flex gap-3 align-items-center">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{numItems}</span>
      </div>
    </>
  );
};

export default CartWidget;
