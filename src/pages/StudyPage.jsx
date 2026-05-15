import { useState } from "react";
import { Link } from "react-router-dom";
import CaseFiles from "../Components/CaseFiles";
import MyCases from "../Components/MyCases";
import OpenCaseFile from "../Components/OpenCaseFile";
import studyImg from "../Img/StudyImg.png";
import "./Page.css";

function StudyPage() {
  const [view, setView] = useState("menu");
  const [selectedQuestId, setSelectedQuestId] = useState(null);

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${studyImg})` }}
    >
      <div className="overlay" />

      <div className={view === "openCase" ? "study-card-wide" : "login-card"}>
        <h2>Kontoret</h2>
        <p className="subtitle">Consulting Detective</p>

        {view === "menu" && (
          <>
        

            <button onClick={() => setView("caseFiles")}>
              Se alla mordfall
            </button>

            <button onClick={() => setView("myCases")}>
              Mina utredningar
            </button>

              {/* <Link to="/study/butler" className="secondary">
                Call the Butler
              </Link> */}

            <Link to="/hall" className="secondary">
                Gå tillbaka till hallen
            </Link>
              </>
        )}
  
        {view === "caseFiles" && (
          <CaseFiles onClose={() => setView("menu")} />
        )}

        {view === "myCases" && (
          <MyCases
            onClose={() => setView("menu")}
            onOpenCase={(questId) => {
              setSelectedQuestId(questId);
              setView("openCase");
            }}
          />
        )}

        {view === "openCase" && (
        <OpenCaseFile
          questId={selectedQuestId}
          onClose={() => setView("myCases")}
        />
      )}
      {view === "butlerView" && (
        <ButlerView onClose={() => setView("menu")} />
      )}
       
      </div>
    </div>
  );
}

export default StudyPage;