//action types
export const SET_LOADING = "appReducer/SET_LOADING";
export const SET_ERROR = "appReducer/SET_ERROR";
export const SET_VISIBLE_ERROR = "appReducer/SET_VISIBLE_ERROR";
export const DEL_ERROR = "appReducer/DEL_ERROR";

//action creators
export const setLoadingAC = (isLoading) => ({ type: SET_LOADING, isLoading });
export const setErrorAC = (error) => ({
  type: SET_ERROR,
  error,
});
export const setVisibleError = (isVisible) => ({
  type: SET_VISIBLE_ERROR,
  isVisible,
});
export const delErrorAC = () => ({ type: DEL_ERROR });
