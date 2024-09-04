import React from "react";
import { motion } from "framer-motion";

const check = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

const Checkmark = ({ correct }) => {
  const checkPath = () => {
    return (
      <motion.path
        className="check"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
        initial="hidden"
        animate="visible"
        variants={check}
      />
    );
  };

  const xPath = () => {
    return (
      <>
        <motion.path
          className="checkmark-x"
          d="m 14 14 l 24 24"
          initial="hidden"
          animate="visible"
          variants={check}
        />
        <motion.path
          className="checkmark-x"
          d="m 14 38 l 24 -24"
          initial="hidden"
          animate="visible"
          variants={check}
        />
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "8px",
        left: "calc(50% - 30px)",
      }}
    >
      <svg
        className={correct ? "checkmark correct" : "checkmark incorrect"}
        viewBox="0 0 52 52"
      >
        {correct ? checkPath() : xPath()}
      </svg>
    </div>
  );
};

export default Checkmark;
