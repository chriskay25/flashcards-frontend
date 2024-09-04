import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { questionAnswered } from "../actions/quizActions";
import { motion } from "framer-motion";

const Answer = ({ card }) => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const { answer, userAnswer, answered, correct, id } = card;

  const handleAnswerChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleAnswerSubmit = (e) => {
    const payload = {
      id: id,
      answer: userInput,
    };
    dispatch(questionAnswered(payload));
  };

  return (
    <motion.div
      className="answer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
    >
      <>
        <textarea
          value={answered ? userAnswer : userInput}
          onChange={handleAnswerChange}
          placeholder="Answer"
          disabled={answered}
        ></textarea>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            className="answer-submit"
            onClick={handleAnswerSubmit}
            disabled={answered}
          >
            Submit
          </button>
          {answered && !correct && (
            <p style={{ marginLeft: "10px" }}>
              <span style={{ fontWeight: "800", color: "var(--lightred)" }}>
                Correct Answer:
              </span>{" "}
              {answer}
            </p>
          )}
        </div>
      </>
    </motion.div>
  );
};

export default Answer;
