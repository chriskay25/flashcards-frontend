const calculatePercentage = (userAnswer, answer) => {
  const denominator = Math.max(userAnswer.length, answer.length);
  let matchingChars = 0;
  for (let i = 0; i < denominator; i++) {
    if (userAnswer && userAnswer[i].toLowerCase() === answer[i].toLowerCase()) {
      matchingChars++;
    }
  }
  const percent = Math.round((matchingChars / denominator) * 10000) / 100;
  return percent;
};

const updateAnsweredCard = (cards, cardId, userAnswer) => {
  const updatedCards = cards.map((card) => {
    if (card.id !== cardId) return card;
    card.answered = true;
    card.userAnswer = userAnswer;
    const percent = calculatePercentage(userAnswer, card.answer);
    card.correct = percent >= 90 ? true : false;
    return card;
  });

  return updatedCards;
};

const initialState = {
  started: false,
  finished: false,
  showHintModal: false,
  numberAnswered: 0,
  numberCorrect: 0,
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        started: true,
        deck: action.payload.deck,
        cards: action.payload.cards,
      };
    case "ANSWERED":
      const newCards = updateAnsweredCard(
        state.cards,
        action.payload.id,
        action.payload.answer
      );
      return {
        ...state,
        cards: newCards,
        numberAnswered: newCards.filter((c) => c.answered).length,
        numberCorrect: newCards.filter((c) => c.correct).length,
      };
    case "SHOW_HINT_MODAL":
      return {
        ...state,
        showHintModal: action.payload.open,
        hintContent: action.payload.content,
      };
    case "CLEAR_QUIZ":
      return {
        ...state,
        started: false,
        finished: false,
        showHintModal: false,
        numberAnswered: 0,
        numberCorrect: 0,
      };
    default:
      return state;
  }
};
