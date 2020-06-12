import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Characters from "./Characters";

const Base_URL = "https://swapi.dev/api/";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [cardState, setCardState] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${Base_URL}people/`).then((res) => {
      console.log(res);
      setCardState(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">StarWars Characters</h1>
      {cardState?.map((post) => {
        return <Characters {...post} />;
      })}
    </div>
  );
};

export default App;
