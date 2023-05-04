import axios from "axios";
import { GET_ERRORS, GET_CARS, GET_CAR, DELETE_CAR } from "./types";

export const createCar = (car, history) => async dispatch => {
  try {
    const res = await axios.post("/api/car", car);
    history.push("/cars");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getCars = () => async dispatch => {
  const res = await axios.get("/api/car/all");
  dispatch({
    type: GET_CARS,
    payload: res.data
  });
};

export const getCar = (carIdentifier, history) => async dispatch => {
  const res = await axios.get(`/api/car/${carIdentifier}`);
  dispatch({
    type: GET_CAR,
    payload: res.data
  });
};

export const deleteCar = carIdentifier => async dispatch => {
  if (window.confirm("Are you sure to delete this car ?")) {
    await axios.delete(`/api/car/${carIdentifier}`);
    dispatch({
      type: DELETE_CAR,
      payload: carIdentifier
    });
  }
};
