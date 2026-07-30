import React, { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  const [choice, setChoice] = useState("No choice selected");

  const handleLike = () => {
    setChoice("Would Like to Play With");
  };

  const handleIndifferent = () => {
    setChoice("Indifferent");
  };

  const handleDislike = () => {
    setChoice("Would Not Like to Play With");
  };

  return (
    <div className="App">
      <h1>DiceDate Work in Progress</h1>

      <p>Find local gamers to play games with.</p>

      <div className="team-members">
        <h2>Team Members</h2>
        <p>Horace Vial</p>
        <p>James Ash</p>
        <p>Dustin Pulu</p>
      </div>


      <h2>Choice: {choice}</h2>

      <Button
        label="Would Like to Play With"
        onClick={handleLike}
      />

      <Button
        label="Indifferent"
        onClick={handleIndifferent}
      />

      <Button
        label="Would Not Like to Play With"
        onClick={handleDislike}
      />
    </div>
  );
}

export default App;