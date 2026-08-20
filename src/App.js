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

  // Stores the user's playstyle preferences
  const [preferences, setPreferences] = useState({
    roleplay: 3,
    combat: 3,
    exploration: 3,
    strategy: 3,
    social: 3
  });

  const handleLogin = (account) => {
    // Normal login only sends the username
    if (typeof account === "string") {
      setUser(account);
      setScreen("feed");
      return;
    }

    // Create Account sends username and preferences
    setUser(account.username);

    if (account.preferences) {
      setPreferences(account.preferences);
    }

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

        {screen === "profile" && (
          <MyProfile
            username={user}
            preferences={preferences}
          />
        )}
      </main>

      {/* Navigation between main screens */}
      <nav className="bottom-nav">
        <button onClick={() => setScreen("feed")}>
          Profiles
        </button>

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