import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import carReducer from "./carReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  car: carReducer,
  security: securityReducer
});
