import { combineReducers } from "redux";
import { deckReducer } from "./decks";
import { cardReducer } from "./cards";
import { userReducer } from "./users";
import { quizReducer } from "./quizzes";
export default combineReducers({
  deckReducer,
  cardReducer,
  userReducer,
  quizReducer,
});
