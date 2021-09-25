import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "./CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ numItems }) => {
  return (
    <>
      <div className="navbar bg-dark p-4 pt-0 pb-0">
        <div className="d-flex align-items-center gap-2 btn btn-dark">
          <FontAwesomeIcon icon={faStoreAlt} />
          <h1>MaizoShop</h1>
        </div>
        <div className="d-flex align-items-center">
          <div className="me-5 d-flex gap-3">
            <a href="#" className="text-decoration-none text-light">
              Inicio
            </a>
            <a href="#" className="text-decoration-none text-light">
              Ofertas
            </a>
            <a href="#" className="text-decoration-none text-light">
              Perfil
            </a>
          </div>
          <CartWidget numItems={numItems} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
