import "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <h1>Página no encontrada, pincha abajo para volver</h1>
      <h2>
        <Link to="/"></Link>Inicio
      </h2>
    </>
  );
};

export default NotFoundPage;
