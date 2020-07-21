import { SETSERVICENUMBER, UPDATE_ATTRIBUT } from 'actions';


export const setServiceNumber = (value) => {

    return {
        type: SETSERVICENUMBER,
        payload: value
    };
};

export const definiAttributline = (name, value) => {
    return {
        type: UPDATE_ATTRIBUT,
        payload: { name, value }
    };
};

