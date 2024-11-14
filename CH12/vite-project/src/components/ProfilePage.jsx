const ProfilePage = ({ logout }) => {
  const user = JSON.parse(localStorage.getItem('user'));  // Recupera los datos del usuario desde localStorage

  return (
    <div>
      <h2>Welcome, {user ? user.name : "Guest"}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ProfilePage;

