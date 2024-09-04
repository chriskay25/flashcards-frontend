import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import EditCardForm from "./EditCardForm";
import { deleteCard } from "../actions/cardActions";

const itemVariants = {
  initial: { opacity: 0, y: "200px" },
  visible: {
    opacity: 1,
    y: "0px",
    transition: { type: "spring", damping: 10, stiffness: 40 },
  },
};

const EditCard = ({ card, newForm, cardNumber }) => {
  const [flip, setFlip] = useState(newForm ? false : true);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(card.id));
  };

  return (
    <motion.li layout variants={itemVariants}>
      <div className={`edit-card ${flip ? "flip" : ""}`}>
        {newForm && (
          <div className="front">
            <div className={`new-card-cover ${flip ? "flip" : ""}`}>
              <button className="new-card-button">
                <span onClick={() => setFlip(true)}>New Card</span>
              </button>
            </div>
          </div>
        )}
        <div className="back">
          <EditCardForm card={card} cardNumber={cardNumber} setFlip={setFlip} />
          {!newForm && (
            <button
              className="edit-submit delete"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </motion.li>
  );
};

export default EditCard;
