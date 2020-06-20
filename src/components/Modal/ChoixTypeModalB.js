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

class ChoixTypeModalB extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prixLavage: null,
            prixDeplacement: null,
            nbSemaine: null,
            nbHeure: null,
            periodicite: false
        };
    }

    setPrixLavage(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ prixLavage: value });
    }

    setPrixDeplacement(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ prixDeplacement: value });
    }

    setNbSemaine(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ nbSemaine: value });
    }


    setNbHeure(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ nbHeure: value });
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
                    <CardTitle>Paramétrer B </CardTitle>
                    <CardBody>


                    </CardBody>
                    <CardFooter>
                        <hr />

                    </CardFooter>
                </Card></div>);
    }

    // méthode pour calculer le coût de déplacement : tripWfCost*(geoScope/averageSpeed)+kmCost*geoScope
    workTripCalcul() {
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

export default (ChoixTypeModalB);
