import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron bg-light p-5 rounded">
            <h1 className="display-4">¡Bienvenido a nuestra tienda!</h1>
            <p className="lead">{greeting}</p>
            <hr className="my-4" />
            <p>Próximamente encontrarás aquí nuestro catálogo de productos.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Ver productos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
