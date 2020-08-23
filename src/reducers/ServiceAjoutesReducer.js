import {
    ADD_UPDATE_LINE, UPDATE_ATTRIBUT_SA
} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {
        case ADD_UPDATE_LINE:
            if (state.lines && state.lines[action.payload.id]) {
                console.log('lineeeeee', state.lines)
                console.log('actionnn', action)

                if (action.payload.cost) {
                    return {
                        ...state,
                        lines: state.lines.map(line => line.id === action.payload.id ?
                            { ...line, 'cost': action.payload.cost } :
                            line
                        )
                    };
                } else if (action.payload.label) {
                    return {
                        ...state,
                        lines: state.lines.map(line => line.id === action.payload.id ?
                            { ...line, 'label': action.payload.label } :
                            line
                        )
                    };
                }
            } else if (state.lines) {
                console.log('state lines', state.lines)
                return {
                    ...state,
                    lines: [...state.lines, action.payload]
                };
            } else {
                console.log('state lines', state.lines)
                return {
                    ...state,
                    lines: [action.payload]
                };
            }

            break
        case UPDATE_ATTRIBUT_SA:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state
    }
};

// const { menu_item_id, ingrediant } = action.payload;

//     const nextState = state.map(item => {
//         if (item.menu_item_id !== menu_item_id) {
//             // not our item, return it as is
//             return item;
//         }

//         // this is our relevant item, return a new copy of it with modified fields
//         return {
//             ...item,
//             ingrediantTotal: ingrediant.price,
//             ingrediants: [
//                 ...item.ingrediants,
//                 ingrediant
//             ]
//         }
//     });

//     return nextState;