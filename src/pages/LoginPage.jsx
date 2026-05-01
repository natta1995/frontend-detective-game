import { useState } from "react";
import loginImg from "../Img/LoginImg.png"
import "./LoginPage.css"
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const response = await fetch("https://localhost:7060/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      setMessage("Inloggningen misslyckades");
      return;
    }

    const token = await response.text();
    localStorage.setItem("token", token);

    setMessage("Du är inloggad!");
  }

  return (
     <div className="login-page"
     style={{ backgroundImage: `url(${loginImg})` }}
     >
      <div className="overlay" />

      <div className="login-card">
        <h2>Login</h2>
        <p className="subtitle">Consulting Detective</p>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>

        <p>Have you no account?</p>
        <Link to="/register" className="secondary">
        Register
           </Link>
      </div>
    </div>
  );
}

export default LoginPage;
