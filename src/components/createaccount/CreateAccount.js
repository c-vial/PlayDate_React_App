import React, { useState } from "react";

const CreateAccount = ({ onCreateAccount, onBack }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [system, setSystem] = useState("D&D 5e");
  const [role, setRole] = useState("Player");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const [error, setError] = useState("");

  const [roleplay, setRoleplay] = useState(3);
  const [combat, setCombat] = useState(3);
  const [exploration, setExploration] = useState(3);
  const [strategy, setStrategy] = useState(3);
  const [social, setSocial] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !username ||
      !password ||
      !age ||
      !system ||
      !role ||
      !experience ||
      !availability
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (Number(age) < 18) {
      setError("You must be at least 18 years old");
      return;
    }

    setError("");

    // Sends the complete profile to App.js
    onCreateAccount({
      username,
      age,
      system,
      role,
      experience,
      availability,
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

          <select
            value={system}
            onChange={(e) => setSystem(e.target.value)}
          >
            <option value="D&D 5e">D&D 5e</option>
            <option value="Pathfinder">Pathfinder</option>
            <option value="Call of Cthulhu">Call of Cthulhu</option>
          </select>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Player">Player</option>
            <option value="Dungeon Master">Dungeon Master</option>
          </select>

          <input
            type="number"
            placeholder="Years of Experience"
            min="0"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <input
            type="text"
            placeholder="Availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
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

          <button type="submit">
            Create Account
          </button>
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