import React, { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Login from "./components/login/Login";

function App() {
  const [user, setUser] = useState(null);
  const [choice, setChoice] = useState("No choice selected");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLike = () => {
    setChoice("Would Like to Play With");
  };

  const handleIndifferent = () => {
    setChoice("Indifferent");
  };

  const handleDislike = () => {
    setChoice("Would Not Like to Play With");
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <main className="main-content">
        <h1>DiceDate Work in Progress</h1>

        <p className="tagline">
          Find local gamers to play games with
        </p>

        <img
          src="/dicedatelogo.png"
          alt="DiceDate logo"
          className="dice-date-logo"
        />

        <section className="team-members">
          <h2>Team Members</h2>
          <p>Horace Vial</p>
          <p>James Ash</p>
          <p>Dustin Pulu</p>
        </section>

        <p className="choice-result">
          Choice: <strong>{choice}</strong>
        </p>

        <div className="button-group">
          <Button label="No Play" onClick={handleDislike} />
          <Button label="Indifferent" onClick={handleIndifferent} />
          <Button label="Play" onClick={handleLike} />
        </div>
      </main>
    </div>
  );
}

export default App;