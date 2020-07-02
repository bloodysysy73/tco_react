import { combineReducers } from "redux";

import specMachineReducer from "./SpecMachineReducer";
import clientReducer from "./ClientReducer";

export default combineReducers({
    specMachineReducer: specMachineReducer,
    clientReducer: clientReducer
});
