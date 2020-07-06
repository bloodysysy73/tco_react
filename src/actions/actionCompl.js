import { DEFINETIME } from 'actions';


export const defineTime = (name, value) => {
    return {
        type: DEFINETIME,
        payload: { name, value }
    };
};