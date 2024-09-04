export const deckReducer = (
  state = { decks: [], deck: null, mode: "study" },
  action
) => {
  switch (action.type) {
    case "GET_DECK":
      return {
        ...state,
        deck: action.payload,
      };
    case "GET_DECKS":
      return {
        ...state,
        decks: [...action.payload],
      };
    case "ADD_DECK":
      return {
        ...state,
        decks: [...state.decks, action.payload],
      };
    case "SET_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
