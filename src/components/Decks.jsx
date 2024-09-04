import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import DeckOptions from "./DeckOptions";
import NewDeckForm from "./NewDeckForm";
import { getDecks } from "../actions/deckActions";
import { useSelector, useDispatch } from "react-redux";
import { addDeck } from "../actions/deckActions";

const Decks = () => {
  const decks = useSelector((state) => state.deckReducer.decks);
  const dispatch = useDispatch();
  const [form, toggleForm] = useState(false);

  const handleNewDeck = (name) => {
    dispatch(addDeck(name));
    toggleForm(!form);
  };

  useEffect(() => {
    dispatch(getDecks());
  }, [dispatch]);

  return (
    <AnimateSharedLayout>
      <motion.div className="decks-container" layout>
        <motion.header className="decks-header" layout>
          <motion.h2 className="decks-header-text" layout>
            DECKS
          </motion.h2>
          <motion.button
            className="add-deck-bttn"
            style={{
              borderRadius: form ? "50%" : "1rem",
            }}
            onClick={() => toggleForm(!form)}
          >
            <svg
              viewBox="0 0 20 20"
              height="20px"
              width="20px"
              style={{
                transform: form ? "rotate(0deg)" : "rotate(45deg)",
                transition: ".2s ease-in-out",
              }}
            >
              <path
                d="m 0 0, 20 20 m 0 -20, -20 20"
                stroke="var(--light)"
                strokeWidth="3px"
              />
            </svg>
          </motion.button>
        </motion.header>
        {!form && decks.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
              background: "transparent",
              color: "var(--lightblue)",
              fontSize: "40px",
            }}
          >
            <span>No Decks Yet</span>
          </div>
        )}
        {form && <NewDeckForm handleNewDeck={handleNewDeck} />}
        {!form && decks.length > 0 && <DeckOptions decks={decks} />}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Decks;
