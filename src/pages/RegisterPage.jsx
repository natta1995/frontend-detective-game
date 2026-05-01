import { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const response = await fetch("https://localhost:7060/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log(errorText);
      setMessage("Registreringen misslyckades");
      return;
    }

    setMessage("Registrering lyckades! Du kan nu logga in.");
  }

  return (
    <form onSubmit={handleRegister}>
      <h1>Registrera</h1>

      <input
        type="text"
        placeholder="Användarnamn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

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

      <button type="submit">Registrera</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default RegisterPage;