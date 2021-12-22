import { useState } from "react";

const Game = ({ word, attempts, foundLetters }) => {
  const imageIDs = ["base", "side", "top", "rope", "head", "body", "lArm", "rArm", "lLeg", "rLeg"];
  return (
    <main>
      <section>
        <image>
          <div id="imageBackground">
            {imageIDs.slice(0, attempts).map((element) => {
              return <div id={element} key={element}></div>;
            })}
          </div>
        </image>
        <p> remaining attempts: {11 - attempts}</p>
      </section>
      <section id="displayGuesses">
        {word.split("").map((letter, index) => {
          return (
            <div className="successfulGuess" key={letter + index.toString()}>
              <p>{foundLetters.includes(letter) ? letter : /[-]/.test(letter) ? "(dash)" : "_"} </p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Game;
