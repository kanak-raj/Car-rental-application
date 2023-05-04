import { GET_CARS, GET_CAR, DELETE_CAR } from "../actions/types";

const initialState = {
  cars: [],
  car: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload
      };
    case GET_CAR:
      return {
        ...state,
        car: action.payload
      };
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter(car => car.carIdentifier !== action.payload)
      };
    default:
      return state;
  }
}
