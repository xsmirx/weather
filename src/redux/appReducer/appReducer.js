import {
  SET_ERROR,
  DEL_ERROR,
  SET_LOADING,
  SET_VISIBLE_ERROR,
} from "./actions";

const initialState = {
  isLoading: false,
  error: { name: null, message: null, isVisible: false },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          name: action.error.name,
          message: action.error.message,
          isVisible: true,
        },
      };
    case SET_VISIBLE_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          isVisible: action.isVisible,
        },
      };
    case DEL_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          name: null,
          message: null,
          isVisible: false,
        },
      };
    default:
      return state;
  }
};
