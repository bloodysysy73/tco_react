import {
    UPDATE_ATTRIBUT_CLIENT,
} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {

        case UPDATE_ATTRIBUT_CLIENT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state
    }
};