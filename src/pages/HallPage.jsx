import { Link } from "react-router-dom";
import bgImage from "../Img/HallImg.png";
import { useState } from "react";
import Letter from "../Components/Letter";
import "./Page.css";

function HallPage() {
  // const isAdmin = false; // senare kan vi läsa roll från token
  const [view, setView] = useState("menu");




  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay" />

      <div  className={view === "letter" ? "letter-wrapper" : "login-card"}>
        <h2>Hallen</h2>
        <p className="subtitle">Consulting Detective</p>
    {view === "menu" && (
      <>

        <Link to="/study" className="secondary">
          Gå in till kontoret
        </Link>

      <button onClick={() => setView("letter")}>Öppna brev från Scotland yard</button>
      </>

    )}
    {view === "letter" && (
      <>
      <Letter onClose={() => setView("menu")}/>
      </>
    
    )}
       

        {/* {isAdmin && (
          <>
            <Link to="/admin" className="secondary">
              Administrative Desk
            </Link>

            <Link to="/cases/create" className="secondary">
              Register New Case
            </Link>
          </>
        )} */}
      </div>
    </div>
  );
}

export default HallPage;