export const categories = [
    'Excavator',
    'Loader',
    'Dumper',
    'Backhoe Loader',
    'Compaction Rollers',
     // 'Specific Customer Activities',
];

export const type = [
    'Roue', 
    'Chenille', 
    'Rail', 

];

export const machinesSpec = [
    {
        id: '1',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '11MWR', 
        numSerie: ['240011', '242011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2', // Fammille de pièces confère des prix différenciés.
        
    },
    {
        id: '2',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '9MWR', 
        numSerie: ['230011', '232011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '3',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '7MWR', 
        numSerie: ['220011', '222011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {

        id: '4',
        categorie: 'Excavator', 
        type: 'Chenille' ,
        gamme: '10MCR', 
        numSerie: ['140033', '140300','140472', '172011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '1',
    },
    {
        id: '5',
        categorie: 'Excavator', 
        type: 'Chenille' ,
        gamme: '8MCR', 
        numSerie: ['130040', '130600', '130900', '162011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '1',
    },
    {
        id: '6',
        categorie: 'Excavator', 
        type: 'Chenille' ,
        gamme: '6MCR', 
        numSerie: ['120015','152011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '1',
    },
    {
        id: '7',
        categorie: 'Excavator', 
        type: 'Chenille' ,
        gamme: '15MC', 
        numSerie: ['86011', '87011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '5',
    },
    {
        id: '8',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '15MWR', 
        numSerie: ['82011', '83011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '4',
    },
    {
        id: '9',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '12MTX', 
        numSerie: ['40000', '42011', '43200', '45011', '45625', '45670', '47011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '3',
    },

];

export const clim = [
    'oui',
    'non',
];

export const entretien250 = [
    'Concessionnaire',
    'Client final'
];

export const price = {
    huiles: 0.1,
    pieces: 0.3,
    kits: 0.6
}

// Extensions de garantie
export const dureeContratM = [
    '24', 
    '36',
    '48',
    '60',

];

export const dureeContratH = [
    '3000',
    '3500', 
    '4000',
    '4500',
    '5000',
    '5500', 
    '6000',
    '6500',
    '7000',
    '7500', 
    '8000',
    '8500',
    '9000',
    '9500', 
    '10000',

];
