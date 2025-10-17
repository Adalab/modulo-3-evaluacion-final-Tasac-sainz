import "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <h2>Página no encontrada, pincha abajo para volver</h2>
      <h2>
        <Link to="/" className="links detail-link">
          Inicio
        </Link>
      </h2>
    </>
  );
};

export default NotFoundPage;
