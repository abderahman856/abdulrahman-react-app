import { useState } from "react";

function ShowHide() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {isVisible && <p style={{ marginTop: "20px" }}>Hello, Baashe! 👋</p>}
    </div>
  );
}

export default ShowHide;
