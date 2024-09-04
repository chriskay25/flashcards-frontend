import { useState } from "react";
import { motion } from "framer-motion";

const NewDeckForm = ({ handleNewDeck }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name === "") {
      e.preventDefault();
      setMessage(true);
    } else {
      handleNewDeck(name);
    }
  };

  return (
    <motion.div
      layout
      style={{
        width: "100%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          padding: "30px",
          background: "var(--lighter)",
          width: "80%",
          maxWidth: "600px",
          borderRadius: "1rem",
        }}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2
          style={{
            fontFamily: "Montserrat",
            fontSize: "4.2rem",
            fontStyle: "italic",
            color: "var(--grey)",
            padding: "1rem 0",
          }}
        >
          NEW DECK
        </h2>
        <form className="new-deck-form" onSubmit={(e) => handleSubmit(e, name)}>
          <input
            type="text"
            name="deckname"
            value={name}
            placeholder="Deck name"
            onChange={handleNameChange}
            autoFocus={true}
          />
          <input className="new-deck-submit" type="submit" value="Submit" />
        </form>
      </motion.div>
      {message && (
        <div
          style={{
            color: "red",
            display: message ? "block" : "none",
            position: "absolute",
            bottom: "20px",
            fontSize: "1.5rem",
          }}
        >
          Deck name can't be blank
        </div>
      )}
    </motion.div>
  );
};

export default NewDeckForm;
