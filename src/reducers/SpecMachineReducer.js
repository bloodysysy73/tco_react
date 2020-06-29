import {
    DEFINI_MONTANT_FORFAIT,
    CALCUL_OPTION_A,
    UPDATE_ATTRIBUT
} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {
        case DEFINI_MONTANT_FORFAIT:
            return {
                ...state,
                prixForfait: action.payload
            };
        case CALCUL_OPTION_A:
            return {
                ...state,
                estimatedCostOptionA: action.payload.estimatedCostOptionA,
                geoScope: action.payload.geoScope,
                kmCost: action.payload.kmCost,
                averageSpeed: action.payload.averageSpeed,
                tripWfCost: action.payload.tripWfCost
            };
        case UPDATE_ATTRIBUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state
    }
};