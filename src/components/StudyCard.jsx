import { useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  initial: { opacity: 0, y: "200px" },
  visible: {
    opacity: 1,
    y: "0px",
    transition: { type: "spring", damping: 10, stiffness: 40 },
  },
};

const StudyCard = ({ card }) => {
  const [flip, setFlip] = useState(false);
  return (
    <motion.li variants={itemVariants} onClick={() => setFlip(!flip)}>
      <div className={`study-card ${flip ? "flip" : ""}`}>
        <div className="front">
          <p style={{ fontSize: "2rem" }}>{card.question}</p>
        </div>
        <div className="back">
          <p style={{ fontSize: "2rem" }}>{card.answer}</p>
        </div>
      </div>
    </motion.li>
  );
};

export default StudyCard;
