import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import ReactAudioPlayer from "react-audio-player";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <div className="word-display">
          <h1 className="word-text">{props.results.word}</h1>
          <ReactAudioPlayer src={props.results.phonetics[0].audio} controls />
          <br />
          {props.results.phonetics[1].text}
        </div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
              <p>Synonyms: </p>
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
