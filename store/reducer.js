import { GET_NEWS, SAVE_NEWS } from "./actions";

const initialState = {
  news: [],
  saved: [],
};

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, news: action.payload };
    case SAVE_NEWS:
      return { ...state, saved: [...state.saved, action.payload] };
    default:
      return state;
  }
}
export default newsReducer;
