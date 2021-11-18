import { GET_NEWS } from "./actions";

const initialState = {
  news: [],
};

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, news: action.payload };
    default:
      return state;
  }
}
export default newsReducer;
