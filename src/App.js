import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Result from "./components/Result";
import axios from "axios";
import { createUniqueArray } from "./utils/utils";

function App() {
  const [word, setWord] = useState("");
  console.log(word);
  const [isLoading, setIsLoading] = useState(true);
  const [attempts, updateAttempts] = useState(0);
  const [foundLetters, updateFoundLetters] = useState([]);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://random-word-form.herokuapp.com/random/noun")
      .then(({ data }) => {
        setWord(data[0].toUpperCase());
        setIsLoading(false);
      })
      .catch(console.log);
  }, [play]);

  const uniques = createUniqueArray(word);
  const gameOver = attempts >= 8 || (uniques.length === foundLetters.length && uniques.length !== 0);
  const winner = uniques.length === foundLetters.length && uniques.length !== 0;

  let content;
  if (isLoading) {
    content = (
      <div>
        <p>is loading...</p>;
      </div>
    );
  } else if (gameOver === true || winner === true) {
    content = (
      <div>
        <Result
          word={word}
          setPlay={setPlay}
          updateAttempts={updateAttempts}
          updateFoundLetters={updateFoundLetters}
          winner={winner}
        />
      </div>
    );
  } else {
    content = (
      <div>
        <Game word={word} attempts={attempts} foundLetters={foundLetters} />
        <Input word={word} updateAttempts={updateAttempts} updateFoundLetters={updateFoundLetters} />{" "}
      </div>
    );
  }
  return (
    <div className="app">
      <Header />
      {content}
    </div>
  );
}

export default App;
