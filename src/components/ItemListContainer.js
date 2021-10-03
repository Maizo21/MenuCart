import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <p>Hola {greeting}</p>
      <div>
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
