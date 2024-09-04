import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../containers/CardContainer";
import CardNav from "./CardNav";
import { startQuiz } from "../actions/quizActions";
import { motion } from "framer-motion";

const QuizMode = ({ cards }) => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quizReducer);

  useEffect(() => {
    dispatch(startQuiz(cards));

    return () => dispatch({ type: "CLEAR_QUIZ" });
  }, [cards, dispatch]);

  const next = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
    }
  };

  const back = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goTo = (x) => {
    if (x > 0 && x < cards.length + 1) setIndex(x - 1);
  };

  return (
    <motion.div
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {quiz.cards ? (
        <>
          <CardContainer
            card={quiz.cards[index]}
            index={index}
            mode={"quiz"}
            deckLength={cards.length}
          />

          <CardNav
            back={back}
            next={next}
            cardCount={cards.length}
            goTo={goTo}
            index={index}
            id={cards.length > 0 ? cards[index].id : 0}
          />
        </>
      ) : (
        <h2>Empty</h2>
      )}
    </motion.div>
  );
};

export default QuizMode;
