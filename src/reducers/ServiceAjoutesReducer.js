import {
    SETSERVICENUMBER, UPDATE_ATTRIBUT
} from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case SETSERVICENUMBER:
            return {
                ...state,
                numberService: action.payload
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