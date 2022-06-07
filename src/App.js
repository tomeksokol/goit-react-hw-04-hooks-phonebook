import './App.css';
import Phonebook from "./components/phonebook/Phonebook";
import React from "react";

const App = () => {
 
  return (
    <div className="App">
      <header className="App-header">
        <Phonebook />
      </header>
    </div>
  );

}

export default App;
