import {
    DEFINE_OPTION,
    DEFINI_MONTANT_FORFAIT,
    CALCUL_OPTION_A
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
                prixForfait: action.payload
            };
        case CALCUL_OPTION_A:
            return {
                ...state,
                estimatedCostOptionA: action.payload
            };
        default:
            return state
    }
};
