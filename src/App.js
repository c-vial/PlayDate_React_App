import React, { useState } from "react";
import "./App.css";

import Login from "./components/login/Login";
import CreateAccount from "./components/createaccount/CreateAccount";
import ProfileFeed from "./components/ProfileFeed";
import Matches from "./components/Matches";
import MyProfile from "./components/MyProfile";

function App() {
  // Stores the logged in username
  const [user, setUser] = useState(null);

  // Stores the complete created profile
  const [userProfile, setUserProfile] = useState(null);

  // Controls the create account screen
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  // Controls which main screen is displayed
  const [screen, setScreen] = useState("feed");

  // Stores profiles selected with Play
  const [matches, setMatches] = useState([]);

  const handleLogin = (account) => {
    // Normal login sends only a username
    if (typeof account === "string") {
      setUser(account);

      // Temporary profile for a normal login
      setUserProfile({
        username: account,
        age: "",
        system: "D&D 5e",
        role: "Player",
        experience: "0",
        availability: "Evenings",
        preferences: {
          roleplay: 3,
          combat: 3,
          exploration: 3,
          strategy: 3,
          social: 3
        }
      });

      setScreen("feed");
      return;
    }

    // Create Account sends the complete profile
    setUser(account.username);
    setUserProfile(account);
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
        {screen === "feed" && (
          <ProfileFeed onPlay={handlePlay} />
        )}

        {screen === "matches" && (
          <Matches matches={matches} />
        )}

        {screen === "profile" && (
          <MyProfile profile={userProfile} />
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