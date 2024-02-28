import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

  if (props.meaning.definitions.example) {
    return (
      <div className="Meaning">
        {" "}
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definitions[0].definition}
        </p>
        <br />
        <span>
          {" "}
          <strong>Example: </strong>
          <br />
          <em>{props.meaning.definitions[0].example}</em>
        </span>
        <br />
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        {" "}
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definitions[0].definition}
        </p>
        <br />
      </div>
    );
  }
}
