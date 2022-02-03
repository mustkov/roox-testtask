const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";
const SET_IS_ABOUT = "SET_IS_ABOUT";
const SET_IS_EDIT = "SET_IS_EDIT";
const SET_NEW_DATA = "SET_NEW_DATA";

const defaultState = {
  items: [],
  isFetching: true,
  isFetchError: false,
  isEdit: false,
  isAbout: false,
  newData: [],
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_NEW_DATA:
      return {
        ...state,
        newData: action.payload,
      };
    case SET_IS_ABOUT:
      return {
        ...state,
        isAbout: !state.isAbout,
      };
    case SET_IS_EDIT:
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    case SET_REPOS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      };
    case SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
}

export const setRepos = (repos) => ({
  type: SET_REPOS,
  payload: repos,
});
export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});
export const setFetchError = (bool) => ({
  type: SET_FETCH_ERROR,
  payload: bool,
});
export const setIsAbout = (bool) => ({
  type: SET_IS_ABOUT,
  payload: bool,
});
export const setIsEdit = (bool) => ({
  type: SET_IS_EDIT,
  payload: bool,
});
export const setNewData = (newData) => ({
  type: SET_NEW_DATA,
  payload: newData,
});
