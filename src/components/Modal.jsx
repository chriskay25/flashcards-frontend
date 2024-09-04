import { useDispatch } from "react-redux";
import { triggerHintModal } from "../actions/quizActions";
import { motion } from "framer-motion";

const Modal = ({ content }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    const modalObject = { open: false, content: null };
    dispatch(triggerHintModal(modalObject));
  };

  return (
    <div className="modal-container">
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <motion.div
          className="modal"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.3 },
          }}
        >
          <button
            style={{
              position: "absolute",
              top: 0,
              right: 8,
              background: "transparent",
              border: "none",
              fontSize: "2.2rem",
              fontFamily: "Montserrat",
            }}
            onClick={handleClose}
          >
            {/* <svg
              width="20px"
              height="20px"
              viewBox="0 2 28 28"
              strokeWidth="3px"
              stroke="#fff"
              strokeLinecap="round"
            >
              <path d="m 0 10, 25 20" />
              <path d="m 0 30, 25 -20" />
            </svg> */}
            x
          </button>
          <h3
            style={{ textAlign: "center", marginTop: "10px", fontSize: "2rem" }}
          >
            Hint
          </h3>
          <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>{content}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
