import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response);
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
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
