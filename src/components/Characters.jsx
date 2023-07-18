//Deps
import { useContext } from "react";

//Context
import { CharactersContext } from "../context/CharactersContext";
import Pagination from "./Pagination";

const Characters = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <section className="row">
    <Pagination/>
      {characters.map((character) => (
        <section className="col-3" key={character.id}>
          <section className="card mt-4">
            <img src={character.image} className="card-img-top" alt="..." />
            <section className="card-body" >
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">{character.status}</p>
              <p className="card-text">{character.species}</p>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Characters;
