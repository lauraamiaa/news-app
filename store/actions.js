import axios from "axios";

import * as c from "../constants";

export const GET_NEWS = "GET_NEWS";
export const SAVE_NEWS = "SAVE_NEWS";
export const UNSAVE_NEWS = "UNSAVE_NEWS";

export const newsFetched = (data) => ({
  type: "GET_NEWS",
  payload: data,
});

export function fetchedNews(query) {
  return async function thunk(dispatch, getState) {
    try {
      const res = await axios.get(`${c.SEARCH}&q=${query}`);
      console.log(query);
      const news = res.data.articles;
      dispatch(newsFetched(news));
    } catch (e) {
      console.log(e);
    }
  };
}

export const addNews = (data) => (dispatch) => {
  dispatch({
    type: SAVE_NEWS,
    payload: data,
  });
};
