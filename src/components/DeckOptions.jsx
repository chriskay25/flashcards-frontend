import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import DeckOption from "./DeckOption";

const DeckOptions = ({ decks }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    selectedId === id ? setSelectedId(null) : setSelectedId(id);
  };

  return (
    <AnimateSharedLayout>
      <motion.div className="deck-options-container" layout>
        <motion.ul className="deck-option-container" layout>
          {decks.map((deck) => (
            <DeckOption
              key={deck.id}
              deck={deck}
              selected={selectedId === deck.id}
              setSelectedId={setSelectedId}
              handleClick={handleClick}
            />
          ))}
        </motion.ul>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default DeckOptions;
