import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CardNav = ({ back, next, goTo, cardCount }) => {
  const [navIndex, setNavIndex] = useState("");

  const handleNext = () => {
    next();
    setNavIndex("");
  };

  const handleBack = () => {
    back();
    setNavIndex("");
  };

  const handleNavInput = (e) => {
    let verifyInt = parseInt(e.target.value);
    if (isNaN(verifyInt)) {
      setNavIndex("");
      return;
    }
    setNavIndex(parseInt(e.target.value));
  };

  const handleNavSubmit = () => {
    navIndex && goTo(navIndex);
    setNavIndex("");
  };

  return (
    <div className="navigation-buttons">
      <motion.button className="nav-button back-button" onClick={handleBack}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" />
      </motion.button>
      <div className="card-nav">
        <h4>Card Number</h4>
        <div className="inner-card-nav">
          <input
            style={{ color: "white" }}
            value={navIndex}
            onChange={handleNavInput}
            className="card-nav-input"
          ></input>
          <span> / {cardCount}</span>
          <button
            onClick={() => handleNavSubmit()}
            style={{
              marginLeft: "1rem",
              backgroundColor: "var(--dark)",
              color: "var(--light)",
              border: "none",
            }}
          >
            Go
          </button>
        </div>
      </div>
      <motion.button className="nav-button next-button" onClick={handleNext}>
        <FontAwesomeIcon icon={faArrowRight} size="3x" />
      </motion.button>
    </div>
  );
};

export default CardNav;
