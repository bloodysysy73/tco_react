import {
    SETSERVICENUMBER,
} from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case SETSERVICENUMBER:
            return {
                ...state,
                numberService: action.payload
            };
        default:
            return state
    }
};