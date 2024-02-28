import React, { useState } from "react";

import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log({ results });
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="search-engine">
        <h1>Dictionary.</h1>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            className="search-field"
            onChange={handleKeywordChange}
          />
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
