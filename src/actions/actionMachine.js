import { DEFINE_OPTION, DEFINI_MONTANT_FORFAIT } from 'actions';

//definie si option A ou B pour le déplacement
export const defineOption = (option) => {
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