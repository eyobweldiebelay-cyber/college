import React from 'react';

function Profile() {

  const user = JSON.parse(localStorage.getItem('user'));

  console.log("PROFILE USER:", user);

  return (
    <div className='profile'>

      <p>Username: {user?.username}</p>

      <p>Email: {user?.email}</p>
    </div>
  );
}

export default Profile;