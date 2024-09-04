import StudyCard from "./StudyCard";
import { motion } from "framer-motion";

const listVariants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const StudyMode = ({ cards }) => {
  const view = () => {
    if (cards) {
      return cards.map((card) => <StudyCard key={card.id} card={card} />);
    }
  };
  return (
    <motion.ul
      className="card-list study"
      initial="initial"
      animate="visible"
      variants={listVariants}
      layout
    >
      {view()}
    </motion.ul>
  );
};

export default StudyMode;
