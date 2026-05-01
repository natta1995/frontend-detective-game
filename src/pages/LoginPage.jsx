import { useState } from "react";

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
    <form onSubmit={handleLogin}>
      <h1>Logga in</h1>

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

      <button type="submit">Logga in</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default LoginPage;
