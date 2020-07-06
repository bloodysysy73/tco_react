import {
    DEFINETIME
} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {

        case DEFINETIME:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state
    }
};