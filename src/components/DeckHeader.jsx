import { useDispatch } from "react-redux";
import { setMode } from "../actions/deckActions";

const DeckHeader = ({ name, cardCount, mode }) => {
  const dispatch = useDispatch();
  const handleModeChange = (newMode) => {
    dispatch(setMode(newMode));
  };

  return (
    <header className="deck-header">
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1>{name}</h1>
        <p
          style={{
            fontFamily: "var(--primary-font)",
            paddingLeft: "8px",
            color: "lightsalmon",
          }}
        >
          ({cardCount} Cards)
        </p>
      </div>
      <div style={{}}>
        {mode !== "quiz" && (
          <button
            onClick={() => handleModeChange("quiz")}
            className="deck-title-button"
          >
            Quiz
          </button>
        )}
        {mode !== "study" && (
          <button
            onClick={() => handleModeChange("study")}
            className="deck-title-button"
          >
            Study
          </button>
        )}
        {mode !== "edit" && (
          <button
            onClick={() => handleModeChange("edit")}
            className="deck-title-button"
          >
            Edit
          </button>
        )}
      </div>
    </header>
  );
};

export default DeckHeader;
