//Context
import { CharactersContextProvider } from "./context/CharactersContext";

//Components
import Characters from "./components/Characters";

function App() {
  return (
    <section className="container">
      <h1 className="alert alert-success text-center">Rick and Morty App</h1>
      <CharactersContextProvider>
        <Characters />
      </CharactersContextProvider>
    </section>
  );
}

export default App;
