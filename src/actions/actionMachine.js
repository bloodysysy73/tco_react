import { DEFINE_OPTION, DEFINI_MONTANT_FORFAIT, CALCUL_OPTION_A } from 'actions';

//definie si option A ou B pour le déplacement
export const definiOptionDeplacement = (option) => {
    return {
        type: DEFINE_OPTION,
        payload: option,
    };
};

export const definiMontantForfait = (montant) => {
    return {
        type: DEFINI_MONTANT_FORFAIT,
        payload: montant,
    };
};

export const calculOptionA = (montant) => {
    return {
        type: CALCUL_OPTION_A,
        payload: montant,
    };
};
