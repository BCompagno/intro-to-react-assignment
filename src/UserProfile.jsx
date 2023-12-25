
import React from "react";

function UserProfile({user}) {
    return (
      <div className="user-profile">
        {/* we use curly brackets in JSX to insert JS expressions */}
        <img src={user.imgUrl} className="user-profile-image" alt={user.name} />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }

export default UserProfile;