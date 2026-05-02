import { Link } from "react-router-dom";
import bgImage from "../Img/HallImg.png";
import "./Page.css";

function HallPage() {
  const isAdmin = false; // senare kan vi läsa roll från token

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay" />

      <div className="login-card">
        <h2>The Entrance Hall</h2>
        <p className="subtitle">Consulting Detective</p>

        <p className="room-text">
          The agency is quiet. A faint light spills from the study ahead.
        </p>

        <Link to="/study" className="secondary">
          Enter the Study
        </Link>

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