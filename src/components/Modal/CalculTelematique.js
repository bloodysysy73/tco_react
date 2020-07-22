import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'
import Modal from './Modaux'

import { connect } from "react-redux";

import {
    Card,
    CardFooter,
    CardBody,
    CardTitle
} from "reactstrap";

/* Ce module calcule les frais liés à la télématique
*/

class CalculTelematique extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            installationTele: 0,
        };
    }

    setinstallationTele(value) {
        this.setState({ installationTele: value });
    }

    /* Méthode de calcul pour les anciens modèles. Prends en compte les variabes suivantes : 
     - Le coût de l'installation du boitier (paramétrable par le concessionnaire)
     - Le coût du boitier : 225 euros
     - La durée du contrat en nombre de mois (variable définie lors de la simulation sur la feuille specMachine)
     - Le coût mensuel de l'abonnement au software Télématique MyMecalac 10 euros / mois dans ce cas

     Le calcul sera le suivant : CalculTelematiqueA() 
    **/

    CalculTelematiqueA() {
        let estimatedCostTele = 10 * parseFloat(this.state.dureeContratM) + 225 + parseFloat(this.state.installationTele) ;
        this.setState({ estimatedCostTele: estimatedCostTele });

        let teleAValue = {
            estimatedCostTele: estimatedCostTele,
            installationTele: this.state.installationTele,
            dureeContratM: this.state.dureeContratM,
        }

        this.props.CalculTelematiqueA(teleAValue);
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
        let estimatedCostTeleB = 8.5 * parseFloat(this.state.dureeContratM);
        this.setState({ estimatedCostTeleB: estimatedCostTeleB });
        
        let teleBValue = {
            estimatedCostTeleB: estimatedCostTeleB,
            dureeContratM: this.state.dureeContratM,
        }
        this.props.CalculTelematiqueB(teleBValue);
    }
**/

    renderContent = () => {
        return (
            <div className="content">
                <Card className="card-user">
                    <br />
                    <CardTitle>Paramétrer le cout de l'installation  </CardTitle>
                    <CardBody>
                        <form className="ui form">
                            <br /><label>
                            Paramétrer le cout de l'installation
<input
                                    name="installationTele"
                                    type="number"
                                    placeholder="€"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    value={this.props.installationTele}
                                    min="0.4" max="0.8"
                                    onChange={e => this.setinstallationTele(e.target.value)}
                                    required />
                            </label><br />

                            <label>
                                <br />
                                <div className="hidden content">
                                    <div className="ui button" onClick={() => this.CalculTelematique()}>
                                        <i aria-hidden="true" className="calculator icon"></i>Calculer</div>
                                </div>
                            </label>
                            <br />

                            <br />

                            <label>
                                Coût de la télématique myMECALAC :
<input
                                    //Résultat du coût d'estimation estimé
                                    name="telematiqueResult"
                                    type="number"
                                    value={this.props.estimatedCostTele}
                                    onChange={e => this.CalculTelematiqueA(e.target.value)}
                                    placeholder="€"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    required />
                            </label><br />
                        </form>
                    </CardBody>
                    <CardFooter>

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
                title="Télématique"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/admin/dashboard')}
            />
        )
    }


}


const mapStateToProps = (state) => {
    return {
        estimatedCostTele: state.specMachineReducer.estimatedCostTele,
        installationTele: state.specMachineReducer.installationTele,
    };
};

export default connect(mapStateToProps, { CalculTelematiqueA })(CalculTelematique);

