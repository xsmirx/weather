import { SET_PLACES, SET_WEATHER } from "./actions";

const initialState = {
  weatherCard: {
    isLoading: false,
    weatherObject: null,
  },
  listPlaces: [],
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        listPlaces: [],
        weatherCard: {
          ...state.weatherCard,
          weatherObject: { ...action.payload },
        },
      };
    case SET_PLACES:
      return {
        ...state,
        listPlaces: action.payload.list,
      };
    default:
      return state;
  }
};
