import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for navigation
import "./Signin.css";

function Signin() {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "yossir" && password === "yossi231185") {
      // If the username and password are correct, navigate to the Home page
      navigate("/home");
    } else {
      // If the credentials are incorrect, show an alert
      alert("Invalid username or password");
    }
  };
  

  return (
    <div className="container">
      <h1>Sign In</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="username">
          Username:
        </label>
        <input
          className="input"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label className="label" htmlFor="password">
          Password:
        </label>
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="button" type="submit">
          Sign In
        </button>
      </form>
      {/* Add a link to the homepage */}
      <Link to="/home">Go to Home</Link>
    </div>
  );
}

export default Signin;
