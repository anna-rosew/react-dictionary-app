import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h1>{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
              <p>Synonyms:</p>
              <Synonyms synonyms={meaning.synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
