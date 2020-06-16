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


class ChoixTypeModal extends React.Component {

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
                    <CardTitle>Nettoyage/ Entretien Exterieur</CardTitle>
                    <CardBody>
                        <form className="ui form" onSubmit={() => this.onSubmitForm}>
                            <label>
                                Prix lavage:
<input
                                    name="prixLavage"
                                    type="number"
                                    placeholder="€"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    //value={dureeContratH}
                                    min="1" max="100"
                                    onChange={e => this.setPrixLavage(e.target.value)}
                                    required />
                            </label><br />

                            <label>
                                Prix déplacement:
<input
                                    name="prixDeplacement"
                                    type="number"
                                    placeholder="€"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    //value={dureeContratA}
                                    min="1" max="100"
                                    onChange={e => this.setPrixDeplacement(e.target.value)}
                                    required />
                            </label><br />
                            <label>
                                periodicité : &nbsp;
<input
                                    name="periodicite"
                                    type="checkbox"
                                    //value={dureeContratA}
                                    onChange={e => this.setPeriodicite()}
                                />
                            </label><br />
                            <label>
                                nombre de semaine:
<input
                                    name="nbSemaine"
                                    type="number"
                                    disabled={!this.state.periodicite}
                                    //value={dureeContratA}
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    min="1" max="100"
                                    onChange={e => this.setNbSemaine(e.target.value)}
                                    required />
                            </label><br />
                            <label>
                                nombre d'heure:
<input
                                    name="nbHeure"
                                    type="number"
                                    disabled={!this.state.periodicite}
                                    //value={dureeContratA}
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    min="1" max="100"
                                    onChange={e => this.setNbHeure(e.target.value)}
                                    required />
                            </label><br />
                            <label><br />
                                <div className="ui animated button" tabIndex="0">
                                    <div className="visible content">Sauvegarder et retour</div>
                                    <div className="hidden content">
                                        <button className="ui button"><i className="angle double right icon"></i></button>
                                    </div></div>
                            </label><br />
                        </form>
                    </CardBody>
                    <CardFooter>
                        <hr />

                    </CardFooter>
                </Card></div>);
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

export default (ChoixTypeModal);
