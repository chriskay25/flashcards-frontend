const MenuButton = ({ open, setOpen }) => {
  return (
    <div className="menu-button">
      <span onClick={() => setOpen(!open)}>
        <svg
          width="20px"
          height="20px"
          viewBox="0 2 28 28"
          strokeWidth="2px"
          stroke="#fff"
          strokeLinecap="round"
        >
          <path d={open ? "m 0 10, 25 20" : "m 0 10, 25 0"} />
          <path d="m 0 18, 25 0" style={{ opacity: open ? 0 : 1 }} />
          <path d={open ? "m 0 30, 25 -20" : "m 0 26, 25 0"} />
        </svg>
      </span>
    </div>
  );
};

export default MenuButton;
