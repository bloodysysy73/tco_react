export const categories = [
    {
        id: '1',
        name: 'Excavator' 
    },
    {
        id: '2',
        name: 'Loader',
    },
    {
        id: '3',
        name: 'Dumper', 
    },
    {
        id: '4',
        name: 'Backhoe Loader', 
    },
    {
        id: '5',
        name: 'Compaction Rollers', 
    },
    {
        id: '6',
        name: 'Specific Customer Activities',
    },
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
        numSerie: ['242131', '242157'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2', // Fammille de pièces confère des prix différenciés.
        
    },
    {
        id: '2',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '9MWR', 
        numSerie: ['232160', '232900'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '3',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '7MWR', 
        numSerie: ['22011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {

        id: '4',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '10MCR', 
        numSerie: ['140561'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '5',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '8MCR', 
        numSerie: ['131339'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '6',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '6MCR', 
        numSerie: ['152015'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '1', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '7',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '15MC', 
        numSerie: ['86024'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '8',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '15MWR', 
        numSerie: ['82011'], // Différenciation type de moteur == différent coûts et types de services
        familyServices: '2', // Extension de garrantie confère des prix différenciés.
        familyPieces: '2',
    },
    {
        id: '9',
        categorie: 'Excavator', 
        type: 'Roue' ,
        gamme: '12MTX', 
        numSerie: ['46184'], // Différenciation type de moteur == différent coûts et types de services
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

