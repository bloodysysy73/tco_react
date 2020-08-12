import { DEFINI_MONTANT_FORFAIT, CALCUL_OPTION_A, UPDATE_ATTRIBUT, CALCUL_OPTION } from 'actions';

export const definiMontantForfait = (montant) => {
    return {
        type: DEFINI_MONTANT_FORFAIT,
        payload: montant,
    };
};

export const calculOptionA = (modalBValue) => {
    return {
        type: CALCUL_OPTION_A,
        payload: modalBValue,
    };
};

export const definiAttribut = (name, value) => {
    return {
        type: UPDATE_ATTRIBUT,
        payload: { name, value }
    };
};

export const calculOption = (OptionValue) => {
    return {
        type: CALCUL_OPTION,
        payload: OptionValue,
    };
};
