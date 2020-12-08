const Grocery = ({ name, complete, id, toggle2, deleteProp }) => {
  const handleClick = () => {
    toggle2(id);
  };

  return (
    <li
      style={
        complete
          ? {
              ...styles.grocery,
              ...styles.complete,
              background: "lightgrey",
            }
          : styles.todo
      }
    >
      {name}
      <span onClick={() => deleteProp(id)}>-X-</span>
      <span onClick={handleClick}>-toggle-</span>
    </li>
  );
};

const styles = {
  grocery: {
    cursor: "pointer",
  },
  complete: {
    color: "grey",
    textDecoration: "line-through",
  },
};

export default Grocery;