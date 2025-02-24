import React, { useState } from 'react';
import './login.css';
import logo from './logo.jpg';
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (username === "admin" && password === "password") {
      console.log("Login successful");
  
      // Store authentication token
      localStorage.setItem("authToken", "your-token"); 
  
      navigate("/home"); // Redirect after login
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Login" className="login-image" />
        {error && <p className="error-message">{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
