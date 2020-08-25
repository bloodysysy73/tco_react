import { UPDATE_ATTRIBUT_CONCESS } from 'actions';


export const definiInfoConcess = (name, value) => {
    return {
        type: UPDATE_ATTRIBUT_CONCESS,
        payload: { name, value }
    };
};