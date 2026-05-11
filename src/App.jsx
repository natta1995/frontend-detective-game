import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import HallPage from "./pages/HallPage.jsx"
import StudyPage from "./pages/StudyPage";
import ButlerStudyPage from "./pages/ButlerStudyPage.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/hall" element={<HallPage />} />
      <Route path="/study" element={<StudyPage />} />
      <Route path="/study/butler" element={<ButlerStudyPage />} />
    </Routes>
  )
}

export default App
