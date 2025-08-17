function Notification({ isLoggedIn }) {
  return (
    <div>
      <h1>Notification</h1>
      {isLoggedIn && <p>Welcome back! 🎉</p>}
    </div>
  );
}

export default Notification;
