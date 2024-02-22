import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="dictionary-app">
        <header className="App-header">
          <h3>Dictionary.</h3>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>Coded by Anna-Rose Wain</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
