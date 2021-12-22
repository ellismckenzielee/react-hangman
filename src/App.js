import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Result from "./components/Result";
import axios from "axios";

function App() {
  const [word, setWord] = useState("");
  const [attempts, updateAttempts] = useState(0);
  const [foundLetters, updateFoundLetters] = useState([]);
  const uniques = [];
  const [play, setPlay] = useState(true);
  useEffect(() => {
    axios
      .get("https://random-word-form.herokuapp.com/random/noun")
      .then(({ data }) => {
        setWord(data[0].toUpperCase());
        setPlay(false);
      })
      .catch(console.log);
  }, [play]);
  word.split("").forEach((letter) => {
    if (!uniques.includes(letter)) uniques.push(letter);
  });
  console.log(uniques);
  if (attempts >= 8 || uniques.length === foundLetters.length) {
    const winner = uniques.length === foundLetters.length;
    return (
      <div className="App">
        <Header />
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
    return (
      <div className="App">
        <Header />
        <Game word={word} attempts={attempts} foundLetters={foundLetters} />
        <Input word={word} updateAttempts={updateAttempts} updateFoundLetters={updateFoundLetters} />
      </div>
    );
  }
}

export default App;
