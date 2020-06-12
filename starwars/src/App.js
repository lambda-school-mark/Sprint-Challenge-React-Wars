import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Characters from "./components/Character";

const Base_URL = "https://swapi.dev/api/";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [cardState, setCardState] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  function getLastPage() {
    axios.get(cardState.previous).then((res) => {
      console.log(res);
      setCardState(res.data);
    });
  }

  function getNextPage() {
    axios.get(cardState.next).then((res) => {
      console.log(res);
      setCardState(res.data);
    });
  }

  useEffect(() => {
    console.log("effect");
    axios.get(`${Base_URL}people/`).then((res) => {
      console.log(res);
      setCardState(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {cardState?.results?.map((post) => {
        return <Characters {...post} />;
      })}
      {cardState.previous && <button onClick={getLastPage}>back</button>}
      {cardState.next && <button onClick={getNextPage}>next</button>}
    </div>
  );
};

export default App;
