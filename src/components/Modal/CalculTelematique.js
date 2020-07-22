import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'

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

    CalculTelematiqueA() {
        let estimatedCostTele = 10 * parseFloat(this.state.dureeContratM) + 225 + parseFloat(this.state.installationTele) ;
        this.setState({ estimatedCostTele: estimatedCostTele });

        let modalBValue = {
            estimatedCostTele: estimatedCostTele,
            installationTele: this.state.installationTele,
            dureeContratM: this.state.dureeContratM,
        }

        this.props.CalculTelematiqueA(modalBValue);
    }


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
                                Coût estimé d'un  déplacement :
<input
                                    //Résultat du coût d'estimation estimé
                                    name="workTripResult"
                                    type="number"
                                    value={this.props.estimatedCostOptionA}
                                    onChange={e => this.calculDeplacement(e.target.value)}
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
                title="Choix type déplacement."
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/admin/dashboard')}
            />
        )
    }


}


const mapStateToProps = (state) => {
    return {
        estimatedCostOptionA: state.specMachineReducer.estimatedCostOptionA,
        geoScope: state.specMachineReducer.geoScope,
        kmCost: state.specMachineReducer.kmCost,
        averageSpeed: state.specMachineReducer.averageSpeed,
        tripWfCost: state.specMachineReducer.tripWfCost
    };
};

export default connect(mapStateToProps, { CalculTelematiqueA })(CalculTelematique);

