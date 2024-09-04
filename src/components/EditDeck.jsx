import EditCard from "./EditCard";
import { motion, AnimateSharedLayout } from "framer-motion";

const listVariants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const EditDeck = ({ cards }) => {
  const cardList = () => {
    return cards.map((card) => (
      <EditCard
        key={card.id}
        card={card}
        cardNumber={cards.indexOf(card) + 1}
      />
    ));
  };
  return (
    <motion.ul
      className="card-list edit"
      initial="initial"
      animate="visible"
      variants={listVariants}
      layout
    >
      <AnimateSharedLayout>
        <EditCard newForm={true} />
        {cardList()}
      </AnimateSharedLayout>
    </motion.ul>
  );
};

export default EditDeck;
