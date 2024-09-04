export const startQuiz = (cards) => {
  return (dispatch, getState) => {
    const { deck } = getState().deckReducer;
    let quizCards = cards.map((card) => {
      return Object.assign({}, card, {
        answered: false,
        correct: null,
        userAnswer: null,
      });
    });

    const deckObject = {
      deck: {
        id: deck.id,
        name: deck.name,
      },
      cards: quizCards,
    };

    dispatch({
      type: "START",
      payload: deckObject,
    });
  };
};

export const questionAnswered = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "ANSWERED",
      payload: payload,
    });
  };
};

export const triggerHintModal = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_HINT_MODAL",
      payload: payload,
    });
  };
};
