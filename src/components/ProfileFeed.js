import React, { useState } from "react";
import Button from "./button/Button";
import profiles from "../data/profiles";

const ProfileFeed = ({ onPlay }) => {
  // Tracks which profile is being shown
  const [currentIndex, setCurrentIndex] = useState(0);

  const [lastChoice, setLastChoice] = useState("");

  const currentProfile = profiles[currentIndex];

  // Moves to the next profile
  const moveToNextProfile = () => {
    setCurrentIndex((index) => index + 1);
  };

  const handleNoPlay = () => {
    setLastChoice("No Play");
    moveToNextProfile();
  };

  const handleIndifferent = () => {
    setLastChoice("Indifferent");
    moveToNextProfile();
  };

  // Saves the profile as a match
  const handlePlay = () => {
    setLastChoice("Play");
    onPlay(currentProfile);
    moveToNextProfile();
  };

  // Shown when there are no more profiles
  if (!currentProfile) {
    return (
      <section className="feed-card">
        <h2>No more profiles right now</h2>

        <button
          className="restart-button"
          onClick={() => setCurrentIndex(0)}
        >
          View Profiles Again
        </button>
      </section>
    );
  }

  return (
    <section className="feed-card">
      <p className="profile-label">
        Profile: {currentProfile.name}
      </p>

      

      <div className="profile-description">
        <p><strong>{currentProfile.name}</strong></p>
        <p>{currentProfile.age}</p>
        <p>{currentProfile.pronouns}</p>
      </div>

     

      <img
        src="/dicedatelogo.png"
        alt="DiceDate logo"
        className="feed-logo"
      />

      <div className="profile-description profile-details">
        <p><strong>System:</strong> {currentProfile.system}</p>
        <p><strong>Role:</strong> {currentProfile.role}</p>
        <p><strong>Experience:</strong> {currentProfile.experience} years</p>
        <p><strong>Availability:</strong> {currentProfile.availability}</p>
      </div>

      <div className="button-group">
        <Button label="No Play" onClick={handleNoPlay} />
        <Button label="Indifferent" onClick={handleIndifferent} />
        <Button label="Play" onClick={handlePlay} />
      </div>
    </section>
  );
};

export default ProfileFeed;