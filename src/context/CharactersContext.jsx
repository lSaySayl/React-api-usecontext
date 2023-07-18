import { useState, useEffect, createContext } from "react";

export const CharactersContext = createContext();

// eslint-disable-next-line react/prop-types
export const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pages, setpages] = useState(0);
  const [actualPages, setActualPages] = useState(1);
  const [prevPages, setPrevPages] = useState(null);
  const [nextPages, setnextPages] = useState(null);

  const getData = async () => {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error HTPP en ${response.status}`);
      }
      const { info, results } = await response.json();
      setCharacters(results);
      setTotalResults(info.count);
      setpages(info.pages);
      setPrevPages(info.prev);
      setnextPages(info.next);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CharactersContext.Provider
      value={{ characters, totalResults, pages, actualPages, prevPages, nextPages }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
