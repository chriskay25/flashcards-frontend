import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard, editCard } from "../actions/cardActions";

const EditCardForm = ({ card, cardNumber, setFlip }) => {
  const [question, setQuestion] = useState(card ? card.question : "");
  const [answer, setAnswer] = useState(card ? card.answer : "");
  const [hint, setHint] = useState(card && card.hint ? card.hint : "");
  const dispatch = useDispatch();

  const resetForm = () => {
    setQuestion("");
    setAnswer("");
    setHint("");
  };

  const handleSubmit = (e) => {
    // If card exists, edit it, else create new card
    e.preventDefault();
    if (card) {
      const editedCard = {
        card_id: card.id,
        deck_id: card.deck_id,
        question: question,
        answer: answer,
        hint: hint ? hint : "No hint",
      };
      dispatch(editCard(editedCard));
    } else {
      const newCard = {
        question: question,
        answer: answer,
        hint: hint ? hint : "",
      };
      dispatch(addCard(newCard));
      resetForm();
      setFlip(false);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {!card && (
        <h2
          style={{
            fontFamily: "Montserrat",
            fontSize: "4rem",
            fontStyle: "italic",
            fontWeight: "800",
            color: "var(--grey)",
            position: "absolute",
            bottom: "-.8rem",
            right: "0px",
          }}
        >
          NEW
        </h2>
      )}

      <div className="edit-card-input-container">
        <label>Question {cardNumber}</label>
        <input
          className="edit-card input"
          type="text"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className="edit-card-input-container">
        <label>Answer</label>
        <input
          className="edit-card input"
          type="text"
          name="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <div className="edit-card-input-container">
        <label>Hint</label>
        <input
          className="edit-card input"
          type="text"
          name="hint"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
        />
      </div>
      <input
        className="edit-submit"
        type="submit"
        value={card ? "Submit Changes" : "Create Card"}
      />
    </form>
  );
};

export default EditCardForm;
