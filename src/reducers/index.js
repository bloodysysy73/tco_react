import { combineReducers } from "redux";
import concessReducer from "./ConcessReducer";
import specMachineReducer from "./SpecMachineReducer";
import clientReducer from "./ClientReducer";
import infocomplementaireReducer from "./InformationsComplReducer";
import serviceAjoutesReducer from "./ServiceAjoutesReducer";
import textBoxReducer from "./TextBoxReducer";



export default combineReducers({
    specMachineReducer: specMachineReducer,
    clientReducer: clientReducer,
    concessReducer: concessReducer,
    infocomplementaireReducer: infocomplementaireReducer,
    serviceAjoutesReducer: serviceAjoutesReducer,
    textBoxReducer: textBoxReducer,
});
