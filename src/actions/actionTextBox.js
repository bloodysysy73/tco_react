import { UPDATE_TEXTBOX } from 'actions';


export const definiTextBox = (name, value) => {
    return {
        type: UPDATE_TEXTBOX,
        payload: { name, value }
    };
};