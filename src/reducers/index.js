import { combineReducers } from "redux";

import machineReducer from "../reducers/MachineReducer"

export default combineReducers({
    machine: machineReducer
});
