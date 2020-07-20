import { SETSERVICENUMBER } from 'actions';


export const setServiceNumber = (value) => {
    return {
        type: SETSERVICENUMBER,
        payload: value
    };
};

