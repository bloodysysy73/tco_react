import { UPDATE_ATTRIBUT_CLIENT } from 'actions';


export const definiInfoClient = (name, value) => {
    return {
        type: UPDATE_ATTRIBUT_CLIENT,
        payload: { name, value }
    };
};