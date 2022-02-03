import axios from "axios";
import {
  setFetchError,
  setIsFetching,
  setRepos,
} from "../../reducers/reposReducer";

export const getRepos = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      dispatch(setRepos(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      setTimeout(() => {
        dispatch(setIsFetching(false));
      }, 100);
    }
  };
};
