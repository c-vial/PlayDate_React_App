import React, { useState } from "react";

const CreateAccount = ({ onCreateAccount, onBack }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const [roleplay, setRoleplay] = useState(3);
  const [combat, setCombat] = useState(3);
  const [exploration, setExploration] = useState(3);
  const [strategy, setStrategy] = useState(3);
  const [social, setSocial] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !age) {
      setError("Please fill in all fields");
      return;
    }

    if (Number(age) < 18) {
      setError("You must be at least 18 years old");
      return;
    }

    setError("");

    onCreateAccount({
      username,
      preferences: {
        roleplay,
        combat,
        exploration,
        strategy,
        social
      }
    });
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <h1>Create Account</h1>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <div className="playstyle-preferences">
            <h2>Playstyle Preferences</h2>

            <label>
              Roleplay: {roleplay}
              <input
                type="range"
                min="0"
                max="5"
                value={roleplay}
                onChange={(e) =>
                  setRoleplay(Number(e.target.value))
                }
              />
            </label>

            <label>
              Combat: {combat}
              <input
                type="range"
                min="0"
                max="5"
                value={combat}
                onChange={(e) =>
                  setCombat(Number(e.target.value))
                }
              />
            </label>

            <label>
              Exploration: {exploration}
              <input
                type="range"
                min="0"
                max="5"
                value={exploration}
                onChange={(e) =>
                  setExploration(Number(e.target.value))
                }
              />
            </label>

            <label>
              Strategy: {strategy}
              <input
                type="range"
                min="0"
                max="5"
                value={strategy}
                onChange={(e) =>
                  setStrategy(Number(e.target.value))
                }
              />
            </label>

            <label>
              Social: {social}
              <input
                type="range"
                min="0"
                max="5"
                value={social}
                onChange={(e) =>
                  setSocial(Number(e.target.value))
                }
              />
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>

        <button
          type="button"
          className="create-account-button"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;