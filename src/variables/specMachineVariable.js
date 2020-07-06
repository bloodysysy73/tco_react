export const categories = [
    'Excavator',
    'Loader',
    'Dumper',
    'Backhoe Loader',
    'Compaction Rollers',
    'Specific Customer Activities',
];

export const type = [
    'Sur Roue', 
    'Sur Chenille', 
    'Sur Rail', 

];

export const machinesSpec = [
    {
        id: '1',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '11MWR', 
        numSerie: ['242011', '240011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2', // Fammille de pièces confère des prix différenciés.
        
    },
    {
        id: '2',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '9MWR', 
        numSerie: ['232011', '230011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '3',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '7MWR', 
        numSerie: ['222011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {

        id: '4',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '10MCR', 
        numSerie: ['140300', '172011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '5',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '8MCR', 
        numSerie: ['130900', '162011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '6',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '6MCR', 
        numSerie: ['120015','152011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '7',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '15MCR', 
        numSerie: ['87011', '86011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '8',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '15MWR', 
        numSerie: ['82011', '83011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '9',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '12MTX', 
        numSerie: ['42011', '42500', '43200', '47011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
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

