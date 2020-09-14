import {
    UPDATE_TEXTBOX,
} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {

        case UPDATE_TEXTBOX:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state
    }
};