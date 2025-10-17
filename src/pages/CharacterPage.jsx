import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SelectedCharacter from "../components/SelectedCharacter";
import apiCharacters from "../services/api";
import Header from "../components/Header";
import "../styles/character-pages.css";

const CharacterPage = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    apiCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

  const element = characters.find((character) => character.id === id);

  return (
    <>
      <Header />
      <div className="link-container">
        <Link to="/" className="links detail-link">
          Volver
        </Link>
      </div>
      {element ? (
        <SelectedCharacter character={element} />
      ) : (
        <h2>Personaje no encontrado</h2>
      )}
    </>
  );
};

export default CharacterPage;
