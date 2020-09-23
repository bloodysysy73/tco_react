import React from 'react';

class DisplayTelematique extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">{this.props.label}</td>
                <td className="text-left"><h3><a href="https://www.mecalac.com/fr/services-clients-mecalac/mymecalac-connected-services.html" target="_blank" rel="noopener noreferrer">
                MyMecalac Connected Services  </a></h3></td>
                <td className="photo"><img width="20" height="20" border="0" align="center" src="https://www.mecalac.com/medias/1595488291_mymecalac-app-en-1-png.png" alt=""/></td>
                <td className="text-left">{this.props.retrofit === ('on') ? this.props.instTeleCost : 0} € de frais d'installation</td>
                <td className="unit">{this.props.telematique ? this.getCost() : 0} € / heure</td>
                <td className="discount"></td>
                <td className="total">{this.props.telematique ? parseFloat(parseFloat(this.getTelematiqueCost())*parseFloat(this.props.margeTele)).toFixed(2) : 0} €  </td>
            </tr>
        );
    }

    getCost() {
        let cost = parseFloat(parseFloat(this.getTelematiqueCost())*parseFloat(this.props.margeTele)).toFixed(2) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }

    getTelematiqueCost() {
        let estimatedCostTele = (parseFloat(this.props.retrofit === ('on') ? 10 : 8.5)* (parseFloat(this.props.dureeContratM)) + 225 + parseFloat(this.props.retrofit === ('on') ? parseFloat(this.props.instTeleCost) : 0));
        let estimatedCostTele2 = 8.5 * ((parseFloat(this.props.dureeContratM)-24));
        if (this.props.numSerie === ('47011')) {
            return Number.parseFloat(estimatedCostTele2).toFixed(2);
        } else if (this.props.numSerie === ('87011')) {
            return Number.parseFloat(estimatedCostTele2).toFixed(2);
        } else if (this.props.numSerie === ('83011')) {
            return Number.parseFloat(estimatedCostTele2).toFixed(2);
        } else { return Number.parseFloat(estimatedCostTele).toFixed(2);}
    }

        /* 
    Lorsque la télématique est déjà installé sur les machines vendues, alors le calcul sera le suivant : CalculTelematiqueB() 
    C'est le cas pour les modèles :
     - 15MC et les références 87011
     - 12MTX et les références 47011
     - 15MWR et les références 83011

    les variabes évoluent : 
     - Le coût de l'installation du boitier : 0 euros
     - Le coût du boitier : 0 euros
     - La durée du contrat en nombre de mois (variable définie lors de la simulation sur la feuille specMachine)
     - Le coût mensuel de l'abonnement au software Télématique MyMecalac 8.5 euros / mois dans ce cas ci
     
    CalculTelematiqueB(){
        let estimatedCostTeleB = 8.5 * (parseFloat(this.props.dureeContratM)-24);
        this.props.CalculTelematiqueB(estimatedCostTeleB);
    }**/


    render() {
        if (this.props.telematique === "oui") {
            return (
                <>
                    {this.renderList()}

                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayTelematique);
