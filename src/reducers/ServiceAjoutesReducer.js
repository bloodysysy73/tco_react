import {
    ADD_UPDATE_LINE, UPDATE_ATTRIBUT_SA
} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {
        case ADD_UPDATE_LINE:

            if (state.lines) {
                console.log('newje suis  dans le 1', state.serviceAjoutesReducer)

                let newstate = {
                    ...state,
                    [action.payload.name]: action.payload.value
                }

                let newTotal = 0;
                newstate.lines.map(item => {
                    newTotal += item.cost;
                });

                console.log('newTotal', newTotal)

                newstate.totalCost_autreService = newTotal;
                return newstate;
            } else {
                return {
                    ...state,
                    lines: { ...state.lines, [action.payload.id]: action.payload }
                };
            }
        case UPDATE_ATTRIBUT_SA:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state
    }
};


// const Cart = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             let newstate = [...state, action.payload];
//             let newTotal = 0;
//             newstate.items.forEach(item => {
//                 newTotal += item.price;
//             });
//             newstate.total = newTotal;
//             return newstate;
//         default:
//             return state
//     }
// }
