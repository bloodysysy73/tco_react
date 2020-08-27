import {
    ADD_UPDATE_LINE, UPDATE_ATTRIBUT_SA, UPDATE_TOT_COST
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
                return {
                    ...state,
                    lines: [...state.lines, action.payload]
                };
            } else {
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
        case UPDATE_TOT_COST:
            let newstate = { ...state };
            let newTotal = 0;
            newstate.lines.forEach(line => {
                let cost = parseInt(line.cost, 10);
                newTotal += cost;
            });
            newstate.totalCost_autreService = newTotal;
            return newstate;

        default:
            return state
    }
};
