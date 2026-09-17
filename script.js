import React, { useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

function ConditionalRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Conditional Rendering"),

    isLoggedIn
      ? React.createElement("p", null, "Welcome, User!")
      : React.createElement("p", null, "Please Login"),

    React.createElement(
      "button",
      {
        onClick: () => setIsLoggedIn(!isLoggedIn)
      },
      isLoggedIn ? "Logout" : "Login"
    )
  );
}

createRoot(document.getElementById("root")).render(
  React.createElement(ConditionalRender)
);
