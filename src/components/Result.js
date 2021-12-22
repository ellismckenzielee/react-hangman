import { useState } from "react";

const Result = ({ word, updateAttempts, updateFoundLetters, winner, setPlay }) => {
  const message = winner ? "Congratulations, you guessed it!" : "You Lose!";
  return (
    <section>
      <h2>{message}</h2>
      <p> The word was: {word}</p>
      <button
        onClick={() => {
          updateAttempts(0);
          updateFoundLetters([]);
          setPlay((prev) => {
            return !prev;
          });
        }}
      >
        {" "}
        Play Again?{" "}
      </button>
    </section>
  );
};

export default Result;
