export const addCard = (data) => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  const { deck } = getState().deckReducer;
  if (token) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/decks/${deck.id}/cards`,
        {
          headers: { "Content-Type": "application/json", Authorization: token },
          method: "POST",
          body: JSON.stringify({ card: data }),
        }
      );
      const cardData = await response.json();
      if (!cardData.error) {
        dispatch({ type: "ADD_CARD", payload: cardData });
      } else {
        console.log("Something went wrong: ", cardData);
      }
    } catch (err) {
      alert("Card could not be created, sorry. ", err);
    }
  }
};

export const editCard = (data) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const { card_id } = data;
  if (token) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/cards/${card_id}`,
        {
          headers: { "Content-Type": "application/json", Authorization: token },
          method: "PUT",
          body: JSON.stringify({ card: data }),
        }
      );
      const cardData = await response.json();
      if (!cardData.error) {
        dispatch({ type: "UPDATE_CARD", payload: cardData });
      } else {
        console.log("Something went wrong: ", cardData);
      }
    } catch (err) {
      alert("Card couldn't be edited, sorry. ", err);
    }
  }
};

export const deleteCard = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/cards/${id}`, {
        headers: { "Content-Type": "application/json", Authorization: token },
        method: "DELETE",
      });
      const data = await response.json();
      if (data.status === "ok") {
        console.log("Deleted card return data: ", data);
        dispatch({ type: "DELETE_CARD", payload: id });
      } else {
        console.log("Ooooops");
      }
    } catch (err) {
      alert(`Err: ${err}`);
    }
  }
};

export const setCards = (cards) => {
  return (dispatch) => {
    dispatch({ type: "SET_CARDS", payload: cards });
  };
};
