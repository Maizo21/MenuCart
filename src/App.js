import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  let numItems = 5;
  let user = "Hernan";

  return (
    <>
      <nav className="text-light">
        <NavBar numItems={numItems} />
      </nav>
      <main className="bg-secondary pt-2 pb-1">
        <div className="ms-5 text-light">
          <ItemListContainer greeting={user} />
        </div>

        <div className="d-flex justify-content-end me-4 ">
          <ItemCount stock={8} />
        </div>
      </main>
    </>
  );
};

export default App;
