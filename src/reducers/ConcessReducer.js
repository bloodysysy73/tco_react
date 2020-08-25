import {
    UPDATE_ATTRIBUT_CONCESS,
} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {

        case UPDATE_ATTRIBUT_CONCESS:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state
    }
};