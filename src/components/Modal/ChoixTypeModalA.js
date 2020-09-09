import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'
import Modal from './Modaux'

import { connect } from "react-redux";
import { calculOptionA, definiAttribut } from "../../actions/actionMachine"

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




    handleChange(e) {
        this.props.definiAttribut(e.target.name, e.target.value);
    }


    renderContent = () => {
        return (
            <div className="content">
                <Card className="card-user">
                    <br />
                    <CardTitle>Paramétrer le calcul du coût d'un déplacement </CardTitle>
                    <CardBody>
                        <form className="ui form">
                            <br /><label>
                                Définir le champ d'action géographique
<input
                                    // Indiquer la distance maximum d'action du concessionnaire
                                    name="geoScope"
                                    type="number"
                                    placeholder="km"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    value={this.props.geoScope}
                                    min="1" max="100"
                                    onChange={e => this.handleChange(e)}
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
                                    value={this.props.kmCost}
                                    min="0.4" max="0.8"
                                    onChange={e => this.handleChange(e)}
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
                                    value={this.props.averageSpeed}
                                    min="30" max="100"
                                    onChange={e => this.handleChange(e)}
                                    required />
                            </label><br />



                            <label>
                                Coût de la main d'oeuvre en déplacement :
<input
                                    // Le coût de la main d'oeuvre en déplacement sera calculé dans le module "coût de la MO".
                                    name="tripWfCost"
                                    type="number"
                                    placeholder="h/€"
                                    value={this.props.tripWfCost}
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    min="1" max="100"
                                    onChange={e => this.handleChange(e)}
                                    required />
                            </label><br /><br />

                            <label>
                                Coût estimé d'un  déplacement :
<input
                                    //Résultat du coût d'estimation estimé
                                    name="workTripResult"
                                    type="number"
                                    value={this.calculDeplacement()}
                                    placeholder="€"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    readOnly />
                            </label><br />
                            <br />
                        </form>
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card></div>);
    }

    calculDeplacement() {
        let CostOptionA = (parseFloat(this.props.tripWfCost)*(parseFloat(this.props.geoScope)/(parseFloat(this.props.averageSpeed))))+((parseFloat(this.props.kmCost)*(parseFloat(this.props.geoScope))));
        return  Number.parseFloat(CostOptionA).toFixed(2);
        
    }

    renderActions = () => {

        return (
            <React.Fragment>
                <Link to="/admin/calculator" className="ui button">Valider</Link>
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


/*  
<label>
<br />
<div className="hidden content">
    <div className="ui button" onClick={() => this.calculDeplacement()}>
        <i aria-hidden="true" className="calculator icon"></i>Calculer</div>
</div>
</label>
<br />
**/

export default connect(mapStateToProps, { calculOptionA, definiAttribut })(ChoixTypeModalA);

