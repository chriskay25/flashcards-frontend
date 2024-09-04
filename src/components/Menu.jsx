import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: "200px",
  },
  visible: {
    opacity: [0, 0, 0.5, 1],
    y: 0,
    transition: {
      type: "spring",
      stiffness: 175,
      damping: 25,
    },
  },
};

const Menu = ({ logoutUser, open, setOpen }) => {
  const handleLogout = () => {
    logoutUser();
  };

  return (
    <motion.div
      className="menu"
      variants={menuVariants}
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      layout
    >
      <button className="fontawesome-home" onClick={() => setOpen(false)}>
        <Link to="/" style={{ marginRight: "2rem", color: "white" }}>
          <FontAwesomeIcon
            icon={faHouseUser}
            style={{ marginRight: ".5rem", color: "white" }}
          />
          <span>Home</span>
        </Link>
      </button>

      <button className="fontawesome-logout" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: ".5rem" }} />
        <span>Logout</span>
      </button>
    </motion.div>
  );
};

export default Menu;
