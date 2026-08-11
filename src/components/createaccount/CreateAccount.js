import React, { useState } from "react";

const CreateAccount = ({ onCreateAccount, onBack }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !age) {
      setError("Please fill in all fields");
      return;
    }

    if (age < 18) {
      setError("You must be at least 18 years old");
      return;
    }

    setError("");
    onCreateAccount(username);
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