import React from "react";
import Graphics from "./graphics/Graphic";

const MyProfile = ({ profile }) => {
  return (
    <section className="my-profile-screen">
      <h1>My Profile</h1>

      <div className="profile-description">
        <p>
          <strong>Username:</strong> {profile.username}
        </p>

        <p>
          <strong>System:</strong> {profile.system}
        </p>

        <p>
          <strong>Role:</strong> {profile.role}
        </p>

        <p>
          <strong>Experience:</strong> {profile.experience} years
        </p>

        <p>
          <strong>Availability:</strong> {profile.availability}
        </p>
      </div>

      {/* Displays the playstyle values chosen during account creation */}
      <Graphics preferences={profile.preferences} />
    </section>
  );
};

export default MyProfile;