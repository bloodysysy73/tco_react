
export const opertations = [
    {
        id: '1', 
        opType:'Vérification générale',
        opNom: 'Les fuites (huiles moteur et hydraulique, liquide de refroidissement, gasoil)',
        opMachineType:'', 
        opList:'1', // Si 1 = roue par défault ; 2 = chenille ; Si 0 = exception 15
        mtxList : '1', // Si 1 = MTX operations, sinon autre.
        opTime: '0.5',
        opCostPiece: '', // Coût pièce à identifier

        opRecurrence: '1', // opération récurrente à chaque déplacement;
        opFrequence: [
            [0, 0, 0, 0, 0, 0, 0, 0],
        ], // 100 ; 250 ; 500 ; 1000 ; 1500 ; 2000 ; 3000

    },

    {
        id: '1', 
        opType:'Vérification générale',
        opNom: 'Les fuites (huiles moteur et hydraulique, liquide de refroidissement, gasoil)',
        opMachineType:'roue', 
        opList:'1', // Si 1 = roue par défault ; 2 = chenille ; Si 0 = exception 15
        mtxList : '1', // Si 1 = MTX operations, sinon autre.
        opTime: '0.5',
        opCostPiece: '', // Coût pièce à identifier

        opRecurrence: '1', // opération récurrente à chaque déplacement;
        opFrequence: [
            [0, 0, 0, 0, 0, 0, 0, 0],
        ], // 100 ; 250 ; 500 ; 1000 ; 1500 ; 2000 ; 3000

    },

]