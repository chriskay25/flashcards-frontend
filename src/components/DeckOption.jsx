import React from "react";
import { motion } from "framer-motion";
import ModeSelect from "./ModeSelect";

const optionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    width: "100%",
    color: "#c2dae2",
  },
  open: {
    opacity: 1,
    color: "var(--lightcoral)",
  },
};

const DeckOption = ({ deck, selected, handleClick }) => {
  return (
    <motion.li
      key={deck.id}
      className="deck-option"
      initial="hidden"
      animate={selected ? "open" : "visible"}
      exit="exit"
      variants={optionVariants}
      layout
    >
      <motion.div
        style={{ padding: "1rem" }}
        onClick={() => handleClick(deck.id)}
        layout
      >
        <motion.h2
          style={{
            fontFamily: "Bungee",
            fontSize: "2.5rem",
            fontWeight: "800",
            textTransform: "uppercase",
          }}
          layout
        >
          {deck.name}
        </motion.h2>
        {selected && (
          <motion.div
            style={{ fontSize: "1.8rem", fontFamily: "Montserrat" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            layout
          >
            {deck.cards.length} Cards
          </motion.div>
        )}
      </motion.div>

      {selected && <ModeSelect deck={deck} />}
    </motion.li>
  );
};

export default DeckOption;
