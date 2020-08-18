import { ADD_UPDATE_LINE, UPDATE_ATTRIBUT_SA } from 'actions';


export const definiAttribut_sa = (name, value) => {
    return {
        type: UPDATE_ATTRIBUT_SA,
        payload: { name, value }
    };
};

export const saveLine = (line) => {
    return {
        type: ADD_UPDATE_LINE,
        payload: line
    };
};
