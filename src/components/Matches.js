import React from "react";
import ProfileChart from "./ProfileChart";

const Matches = ({ matches }) => {
  return (
    <section className="matches-screen">
      <h1>Your Plays</h1>

      {matches.length === 0 ? (
        <p>You have not selected any profiles yet.</p>
      ) : (
        <>
          {/* Displays all selected profiles */}
          <div className="matches-list">
            {matches.map((match) => (
              <div className="match-card" key={match.id}>
                <h2>{match.name}</h2>
                <p><strong>System:</strong> {match.system}</p>
                <p><strong>Role:</strong> {match.role}</p>
                <p><strong>Experience:</strong> {match.experience} years</p>
                <p><strong>Availability:</strong> {match.availability}</p>
              </div>
            ))}
          </div>

          {/* Dynamic chart based on selected profiles */}
          <ProfileChart matches={matches} />
        </>
      )}
    </section>
  );
};

export default Matches;