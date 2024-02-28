import React, { useState } from "react";

import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log({ results });
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "HjgfexSBpptXz3ld1CCd6cvtmCgkgS1FGrrkjjPDlgvDkuhFchkysBbx";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=10`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="search-engine">
        <h1>Dictionary.</h1>
        <div className="call-to-search">
          {" "}
          <h5>
            Search a word. Any word. Go on, test us. We know everything (well,
            almost)...
          </h5>
        </div>
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
      <Photos photos={photos} />
    </div>
  );
}
