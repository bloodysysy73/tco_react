import { DEFINETIME, DEFINEREF } from 'actions';


export const defineTime = (name, value) => {
    return {
        type: DEFINETIME,
        payload: { name, value }
    };
};

export const defineRef = (value) => {
    return {
        type: DEFINEREF,
        payload: { value }
    };
};