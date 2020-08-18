import {
    SETSERVICENUMBER_SA, ADD_UPDATE_LINE, UPDATE_ATTRIBUT_SA
} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {
        case SETSERVICENUMBER_SA:
            return {
                ...state,
                numberService: action.payload
            };
        case ADD_UPDATE_LINE:
            console.log(action.payload)
            return {
                ...state,
                lines: { ...state.lines, [action.payload.id]: action.payload }
            };
        case UPDATE_ATTRIBUT_SA:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state
    }
};
