function OpenCaseFile({ quest, onClose }) {
  if (!quest) return null;

  return (
    <div className="paper-file">
      <h2>{quest.title}</h2>

      <p>
        The file is worn at the edges. Notes, statements and clues are tucked
        between yellowed pages.
      </p>

      <p>{quest.description}</p>

      <button>Accuse a Suspect</button>

      <button onClick={onClose} className="secondary">
        Think Further and Put the File Away
      </button>
    </div>
  );
}

export default OpenCaseFile;