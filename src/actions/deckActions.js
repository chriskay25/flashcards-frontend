export const getDeck = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/decks/${id}`, {
        headers: { Authorization: token },
        method: "GET",
      });
      const data = await response.json();
      if (data) {
        dispatch({ type: "GET_DECK", payload: data });
      } else {
        console.log("data errrrrrors", data);
      }
    } catch (err) {
      alert("Deck was not found, sorry.", err);
      console.log("Error: ", err);
    }
  }
};

export const getDecks = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/decks", {
      headers: {
        Authorization: token,
      },
    })
      .then((resp) => resp.json())
      .then((decks) => {
        dispatch({
          type: "GET_DECKS",
          payload: decks,
        });
      });
  };
};

export const addDeck = (data) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/decks", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: data,
      }),
    })
      .then((resp) => resp.json())
      .then((deckData) => {
        console.log("deckData: ", deckData);
        if (deckData.error) {
          alert(deckData.error);
        } else {
          dispatch({
            type: "ADD_DECK",
            payload: deckData,
          });
        }
      });
  };
};

export const setMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "SET_MODE",
      payload: mode,
    });
  };
};
