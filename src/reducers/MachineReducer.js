import {
    DEFINE_OPTION,
    DEFINI_MONTANT_FORFAIT
} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {
        case DEFINE_OPTION:
            return {
                ...state,
                optionDeplacement: action.payload
            };
        case DEFINI_MONTANT_FORFAIT:
            return {
                ...state,
                optionDeplacement: action.payload
            };
        default:
            return state
    }
};
