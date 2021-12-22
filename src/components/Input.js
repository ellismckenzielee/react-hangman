import { useState } from "react";

const Input = ({ updateAttempts, word, updateFoundLetters }) => {
  const [chosenChar, updateChosenChar] = useState("");
  const [usedLetters, updateUsedLetters] = useState("");
  const [remainingChars, updateRemainingChars] = useState("abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""));

  return (
    <section id="input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (remainingChars.includes(chosenChar)) {
            const index = remainingChars.indexOf(chosenChar);

            updateRemainingChars((previous) => {
              const remainingChars = previous.slice(0, index).concat(previous.slice(index + 1));
              console.log("RETURNING", remainingChars);
              return remainingChars;
            });
            updateChosenChar("");
            updateUsedLetters((previous) => {
              return previous + chosenChar;
            });
            if (word.includes(chosenChar)) {
              updateFoundLetters((previous) => {
                return [...previous, chosenChar];
              });
            } else {
              updateAttempts((previousAttempts) => {
                return previousAttempts + 1;
              });
            }
          }
        }}
      >
        <fieldset>
          <legend>Please pick a character!</legend>
          <label></label>
          <select className="input" onChange={(e) => updateChosenChar(e.target.value)}>
            <option> </option>
            {remainingChars.map((char) => {
              return (
                <option key={char} value={char}>
                  {char}
                </option>
              );
            })}
          </select>
          <button className="input"> Submit </button>
        </fieldset>
        <p>Used Letters: {usedLetters}</p>
      </form>
    </section>
  );
};

export default Input;
