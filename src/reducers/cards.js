const editUpdate = (cards, cardId, editedCard) => {
  const updatedCards = cards.map((card) => {
    if (card.id !== cardId) return card;
    return editedCard;
  });

  return updatedCards;
};

const deleteUpdate = (cards, cardId) => {
  const updatedCards = cards.filter((card) => card.id !== cardId);
  return updatedCards;
};

export const cardReducer = (state = { cards: [] }, action) => {
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        cards: action.payload,
      };
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case "EDIT_CARD":
      let card = action.payload;
      const editedCards = editUpdate(state.cards, card.id, card);
      return {
        ...state,
        cards: editedCards,
      };
    case "DELETE_CARD":
      let cardId = action.payload;
      const updatedCards = deleteUpdate(state.cards, cardId);
      return {
        ...state,
        cards: updatedCards,
      };
    default:
      return state;
  }
};
