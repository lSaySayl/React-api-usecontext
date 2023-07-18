import { useState, useEffect, createContext } from "react";

export const CharactersContext = createContext();

// eslint-disable-next-line react/prop-types
export const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error HTPP en ${response.status}`);
      }
      const data = await response.json();
      console.log(data.results);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  );
};
