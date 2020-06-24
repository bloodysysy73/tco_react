import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'
import Modal from './Modaux'

import {
    Card,
    CardFooter,
    CardBody,
    CardTitle
} from "reactstrap";

/* Ce module calcule les frais de déplacement au plus juste en ajoutant les coûts horaires de main d'œuvre aux coûts kilométriques.
Renseigner le rayon d'action le plus grand concernant votre concession; 
les coûts kilométriques correspondants a vos véhicules ainsi que la vitesse moyenne de circulation dans votre zone d'activité,
*/

class ChoixTypeModalA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            geoScope: null,
            kmCost: null,
            averageSpee: null,
            tripWfCost: null,
            periodicite: false
        };
    }

    setGeoScope(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ geoScope: value });
    }

    setKmCost(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ kmCost: value });
    }

    setAverageSpeed(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ averageSpeed: value });
    }


    setTripWfCost(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ tripWfCost: value });
    }

    setPeriodicite() {
        this.setState({ periodicite: this.state.periodicite ? false : true });
        console.log("la périodicité", this.state.periodicite);
    }

    onSubmitForm() {
        console.log("submit")

        console.log(this.state)
    }


    renderContent = () => {
        return (
            <div className="content">
                <Card className="card-user">
                    <br />
                    <CardTitle>Paramétrer le calcul du coût d'un déplacement </CardTitle>
                    <CardBody>
                        <form className="ui form" onSubmit={() => this.onSubmitForm}>
                            <br /><label>
                                Définir le champ d'action géographique
<input
                                    // Indiquer la distance maximum d'action du concessionnaire
                                    name="geoScope"
                                    type="number"
                                    placeholder="km"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    //value={dureeContratH}
                                    min="1" max="100"
                                    onChange={e => this.setGeoScope(e.target.value)}
                                    required />
                            </label><br />

                            <label>
                                Fixer le coût du km
<input
                                    // Coûts kilométriques des déplacements en voiture (compris entre 0,4 et 0,8 )
                                    name="kmCost"
                                    type="number"
                                    placeholder="€"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    //value={dureeContratA}
                                    min="0.4" max="0.8"
                                    onChange={e => this.setKmCost(e.target.value)}
                                    required />
                            </label><br />

                            <label>
                                Estimer la vitesse moyenne du véhicule
<input
                                    //Vitesse moyenne de déplacement en fonction de la localisation
                                    name="averageSpeed"
                                    type="number"
                                    placeholder="km/h"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    //value={dureeContratH}
                                    min="30" max="100"
                                    onChange={e => this.setAverageSpeed(e.target.value)}
                                    required />
                            </label><br />



                            <label>
                                Coût de la main d'oeuvre en déplacement :
<input
                                    // Le coût de la main d'oeuvre en déplacement sera calculé dans le module "coût de la MO".
                                    name="tripWfCost"
                                    type="number"
                                    placeholder="h/€"
                                    //value={dureeContratA}
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    min="1" max="100"
                                    onChange={e => this.setTripWfCost(e.target.value)}
                                    required />
                            </label><br /><br />

                            <label>
                                 <br />
                                <Link to='/admin/Parametres/' >
                                    <div className="ui animated button" tabIndex="0">
                                        <div className="visible content">Calculer</div>
                                        <div className="hidden content">
                                            <i aria-hidden="true" className="calculator icon"></i>
                                        </div></div>
                                </Link>
                              </label>
                              <br />
                              <br />
                            
                            <label>
                                Coût estimé d'un  déplacement : 
<input
                                    //Résultat du coût d'estimation estimé
                                    name="workTripResult"
                                    type="string"
                                    placeholder="€"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    required />
                            </label><br />
                        </form>
                    </CardBody>
                    <CardFooter>
                        <hr />

                    </CardFooter>
                </Card></div>);
    }

    // méthode pour calculer le coût de déplacement : tripWfCost*(geoScope/averageSpeed)+kmCost*geoScope
    workTripCalcul() {
    }

    // méthode pour afficher le résultat du calcul du coût de déplacement
    workTripResult() { 
        // console.log(workTripCalcul)
    }

    renderActions = () => {

        return (
            <React.Fragment>
                <Link to="/admin/dashboard" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    render() {
        return (
            <Modal
                title="Choix type déplacement."
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/admin/dashboard')}
            />
        )
    }


}

export default (ChoixTypeModalA);
