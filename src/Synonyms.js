import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  return (
    <div className="Synonyms">
      {" "}
      {props.synonyms.map(function (synonyms, index) {
        return <li key={index}>{synonyms}</li>;
      })}
    </div>
  );
}
