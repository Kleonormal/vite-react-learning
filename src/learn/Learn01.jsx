import { useState } from "react";
import "./Learn01.css";

function AppButton({ children }) {
  return (
    <button type="submit" className="btn">
      {children}
    </button>
  );
}

function Learn01() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameClass = username.length <= 5 ? "input-error" : "input";
  const passwordClass = password.length <= 5 ? "input-error" : "input";

  function handleSubmit(event) {
    event.preventDefault();

    if (usernameClass === "input-error" || passwordClass === "input-error") {
      return;
    }

    console.log("username: ", username);
    console.log("password: ", password);

    setUsername("");
    setPassword("");
  }

  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <input
          className={usernameClass}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          className={passwordClass}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <button type="submit" className="btn">
          Login
        </button>
        <AppButton>Register</AppButton>
      </form>

      {/* <div style={{ fontSize: "50px", lineHeight: "2em" }}>
        <div style={{ fontSize: "12px" }}>11111</div>
        <div style={{ fontSize: "12px" }}>11111</div>
      </div> */}
    </>
  );
}

export default Learn01;
