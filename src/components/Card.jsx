import React from "react";
import { useDispatch } from "react-redux";
import Question from "./Question";
import Answer from "./Answer";
import Checkmark from "./Checkmark";
import CardStats from "./CardStats";
import { triggerHintModal } from "../actions/quizActions";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Card = ({ card, index, deckLength }) => {
  const dispatch = useDispatch();

  const handleHint = () => {
    const modalObject = { open: true, content: card.hint };
    dispatch(triggerHintModal(modalObject));
  };

  return (
    <motion.div className="card" style={{ overflow: "hidden" }}>
      <div className="inner-card" key={index}>
        <span className="question-number">{index + 1}.</span>
        <Question question={card.question} />
        <Answer card={card} />
        <FontAwesomeIcon
          onClick={handleHint}
          className="fontawesome-lightbulb"
          icon={faLightbulb}
          size="2x"
        />
        <CardStats deckLength={deckLength} />
        {card.answered && <Checkmark correct={card.correct} />}
      </div>
    </motion.div>
  );
};

export default Card;
