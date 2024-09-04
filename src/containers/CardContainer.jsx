import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";

const CardContainer = ({ card, index, mode, deckLength }) => {
  return (
    <motion.div className="card-container" layout>
      {card && (
        <Card
          card={card}
          key={card ? card.id : 0}
          index={index}
          mode={mode}
          deckLength={deckLength}
        />
      )}
    </motion.div>
  );
};

export default CardContainer;
