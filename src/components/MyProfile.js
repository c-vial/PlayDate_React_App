import React from "react";

const MyProfile = ({ username }) => {
  return (
    <section className="my-profile-screen">
      <h1>My Profile</h1>

      

      <div className="profile-description">
        <p>
          <strong>Username:</strong> {username}
        </p>

        <p>
          <strong>System:</strong> D&D 5e
        </p>

        <p>
          <strong>Role:</strong> Player
        </p>

        <p>
          <strong>Experience:</strong> 0 years
        </p>

        <p>
          <strong>Availability:</strong> Evenings
        </p>
      </div>
    </section>
  );
};

export default MyProfile;