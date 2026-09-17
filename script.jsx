import React, { useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

function ConditionalRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering</h2>

      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please Login</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <ConditionalRender />
);
