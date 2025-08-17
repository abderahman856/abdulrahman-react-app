function Dashboard({ isLoggedIn }) {
  return (
    <div>
      <h1>{isLoggedIn ? "Welcome" : "Please login"}</h1>

    {isLoggedIn ? <p>yes true</p> : <p>no false</p>}

    </div>
  );
}

export default Dashboard;
