import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/study" element={<h1>Study</h1>} />
      <Route path="/desk" element={<h1>Desk</h1>} />
    </Routes>
  )
}

export default App
