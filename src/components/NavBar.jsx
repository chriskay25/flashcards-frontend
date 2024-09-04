import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { userLogout } from "../actions/userActions";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

const navBarVariants = {
  hidden: {
    height: "25px",
  },
  visible: {
    height: [null, "50px"],
    justifyContent: "center",
  },
  loggedIn: {
    height: "25px",
    justifyContent: "space-between",
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    fontSize: "40px",
  },
  loggedIn: {
    fontSize: "20px",
    transition: {
      duration: 0.5,
    },
  },
};

const NavBar = () => {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => setOpen(false);
  }, []);

  const logoutUser = () => {
    setOpen(false);
    dispatch(userLogout());
  };

  return (
    <motion.div
      className="NavBar"
      layout
      initial="hidden"
      animate={currentUser ? "loggedIn" : "visible"}
      variants={navBarVariants}
    >
      <motion.div
        layout
        className="app-header"
        initial="hidden"
        animate={currentUser ? "loggedIn" : "visible"}
        variants={titleVariants}
      >
        <h1>FLASHCARDS</h1>
      </motion.div>

      {currentUser && <MenuButton open={open} setOpen={setOpen} />}

      {open && <Menu logoutUser={logoutUser} open={open} setOpen={setOpen} />}
    </motion.div>
  );
};

export default NavBar;
