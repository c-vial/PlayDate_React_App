import React, { useState } from "react";
import "./App.css";

import Login from "./components/login/Login";
import CreateAccount from "./components/createaccount/CreateAccount";
import ProfileFeed from "./components/ProfileFeed";
import Matches from "./components/Matches";
import MyProfile from "./components/MyProfile";

function App() {
  // Stores the logged in user
  const [user, setUser] = useState(null);

  // Controls the create account screen
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  // Controls which screen is displayed
  const [screen, setScreen] = useState("feed");

  // Stores profiles selected with Play
  const [matches, setMatches] = useState([]);

  const handleLogin = (username) => {
    setUser(username);
    setScreen("feed");
  };

  // Adds a profile to matches
  const handlePlay = (profile) => {
    setMatches((currentMatches) => {
      const alreadyAdded = currentMatches.some(
        (match) => match.id === profile.id
      );

      if (alreadyAdded) {
        return currentMatches;
      }

      return [...currentMatches, profile];
    });
  };

  if (!user) {
    if (showCreateAccount) {
      return (
        <CreateAccount
          onCreateAccount={handleLogin}
          onBack={() => setShowCreateAccount(false)}
        />
      );
    }

    return (
      <Login
        onLogin={handleLogin}
        onCreateAccount={() => setShowCreateAccount(true)}
      />
    );
  }

  return (
    <div className="app">
      <main className="main-content">
        {screen === "feed" && <ProfileFeed onPlay={handlePlay} />}
        {screen === "matches" && <Matches matches={matches} />}
        {screen === "profile" && <MyProfile username={user} />}
      </main>

      {/* Navigation between main screens */}
      <nav className="bottom-nav">
        <button onClick={() => setScreen("feed")}>Profiles</button>

        <button onClick={() => setScreen("matches")}>
          Matches ({matches.length})
        </button>

        <button onClick={() => setScreen("profile")}>
          My Profile
        </button>
      </nav>
    </div>
  );
}

export default App;