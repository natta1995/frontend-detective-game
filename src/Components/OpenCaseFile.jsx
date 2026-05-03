import { useEffect, useState } from "react";

function OpenCaseFile({ questId, onClose }) {
  const [caseFile, setCaseFile] = useState(null);
  const [message, setMessage] = useState("");

  console.log("Opening case file for quest ID:", questId);

  useEffect(() => {
    async function fetchCaseFile() {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://localhost:7060/api/quests/${questId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        setMessage("Could not open the case file.");
        return;
      }

      const data = await response.json();
      setCaseFile(data);
      console.log(data);
    }

    if (questId) {
      fetchCaseFile();
    }
  }, [questId]);

  if (message) return <p>{message}</p>;
  if (!caseFile) return <p>Opening case file...</p>;

  return (
    <div className="paper-file">
      <h2>{caseFile.title}</h2>
      <p>{caseFile.victim}</p>
      <p>{caseFile.weapon}</p>
      <p>{caseFile.summary}</p>
      <p>{caseFile.fullDescription}</p> 
      <p>{caseFile.place}</p>

  {caseFile.suspects.map(s => (
    <div>
      <h4>{s.name}</h4>
      <p>{s.statement}</p>
    </div>
  ))}

      <button>Accuse a Suspect</button>

      <button onClick={onClose} className="secondary">
        Think Further and Put the File Away
      </button>
    </div>
  );
}

export default OpenCaseFile;