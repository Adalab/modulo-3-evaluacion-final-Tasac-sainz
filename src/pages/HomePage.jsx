import { useEffect, useState } from "react";
import listCharacters from "../services/api";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    listCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

  return (
    <ul>
      {characters.map((element) => {
        return (
          <li key={element.id}>
            <img
              src={
                element.image ||
                "https://placehold.co/200x350/611010/000000?text=Harry+Potter"
              }
            />
            <div className="list-text">
              <p>{element.name}</p>
              <p>Especie: {element.species}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HomePage;
