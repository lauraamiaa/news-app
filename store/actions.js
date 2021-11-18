import axios from "axios";

export const GET_NEWS = "GET_NEWS";

const API_URL =
  "https://newsapi.org/v2/everything?apiKey=5b8da4c22ad845fb84ea181b42bbf8d1&q=bonn";

export const getNews = () => {
  try {
    return async (dispatch) => {
      const res = await axios.get(`${API_URL}`);

      if (res.data) {
        dispatch({
          type: GET_NEWS,
          payload: res.data.articles,
        });
      } else {
        console.log("Unable to fetch");
      }
    };
  } catch (error) {
    console.log(e.message);
  }
};
