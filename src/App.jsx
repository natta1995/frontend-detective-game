import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import HallPage from "./pages/HallPage.jsx"
import StudyPage from "./pages/StudyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/hall" element={<HallPage />} />
      <Route path="/study" element={<StudyPage />} />
      <Route path="/desk" element={<h1>Desk</h1>} />
    </Routes>
  )
}

export default App
