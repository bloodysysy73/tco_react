import { combineReducers } from "redux";

import specMachineReducer from "./SpecMachineReducer";
import clientReducer from "./ClientReducer";
import infocomplementaireReducer from "./InformationsComplReducer";
import serviceAjoutesReducer from "./ServiceAjoutesReducer";



export default combineReducers({
    specMachineReducer: specMachineReducer,
    clientReducer: clientReducer,
    infocomplementaireReducer: infocomplementaireReducer,
    serviceAjoutesReducer: serviceAjoutesReducer
});
