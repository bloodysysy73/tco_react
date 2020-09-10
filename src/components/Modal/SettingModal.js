import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'
import Modal from './Modaux'
import { connect } from "react-redux";
import { definiAttribut } from "../../actions/actionMachine"

import {
    Card,
    CardFooter,
    CardBody,
    CardTitle,
    Row,
    Col
} from "reactstrap";


class SettingModal extends React.Component {

    handleChange(e) {
        this.props.definiAttribut(e.target.name, e.target.value);
    }

    renderContent = () => {
        return (
            <div className="content">
                <Card className="card-user">
                    <br />
                    <CardTitle>Paramètres concessionnaires</CardTitle>
                    <CardBody>
                    <form className="ui form">
                    <Row> <Col md="12" xs="12"><br /> Tarif de la main d'oeuvre <br /><br /></Col></Row> 
                    <Row>
                        <Col md="12" xs="12">
                        <label>
                                Coût de la main d'oeuvre en déplacement :
                        
                        <input                                    
                                    name="tripWfCost"
                                    type="number"
                                    placeholder="h/€"
                                    value={this.props.tripWfCost}
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    min="1" max="100"
                                    onChange={e => this.handleChange(e)}
                                    required />
                            </label><br />
                        
                        
                        <label>
                                Coût de la main d'oeuvre lors de l'entrerien :
                            <input
                                    name="entWfCost"
                                    type="number"
                                    placeholder="h/€"
                                    value={this.props.entWfCost}
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    min="1" max="100"
                                    onChange={e => this.handleChange(e)}
                                    required />
                            </label><br />

                        <label>
                                Facteur d'efficacité de la main d'oeuvre :
                                </label>

                            <input
                                    name="coefMo"
                                    type="number"
                                    placeholder="Chiffre compris entre 0.75 et 1.5"
                                    value={this.props.coefMo}
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    min="1" max="100"
                                    onChange={e => this.handleChange(e)}
                                    required />
                            <br /><br />
                        </Col>
                    </Row>

                    




                    <Row> <Col md="12" xs="12"><br /> Climatisation <br /></Col></Row> 
                    <Row>
                        <Col md="12" xs="12">
                        <label><br />
                                Prix de la recharge de gaz :
                                <br /><br />
                        <input
                                    // Une intervention au 3000 heures
                                    name="climCost"
                                    type="number"
                                    placeholder="€"
                                    value={this.props.climCost}
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    min="1" max="100"
                                    onChange={e => this.handleChange(e)}
                                    required />
                            </label><br /><br />
                        </Col>
                        <Col md="6" xs="6">
                        </Col>
                    </Row>

                        

                        <label>
                                <br />
                                <div className="hidden content">
                                    <div className="ui button" onClick={() => this.props.saveSetting}>
                                        <i aria-hidden="true" className="setting icon"></i>Enregistrer les paramètres</div>
                                </div>
                            </label>
                        <br />

                        </form>
                    </CardBody>
                    <CardFooter>
                    </CardFooter>
                </Card></div>);
    }

    renderActions = () => {

        return (
            <React.Fragment>
                <Link to="/admin/calculator" className="ui button">Retour</Link>
            </React.Fragment>
        )
    }

    render() {
        return (
            <Modal
                title="Paramètres"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/admin/calculator')}
            />
        )
    }


}


const mapStateToProps = (state) => {
    return {
        tripWfCost: state.specMachineReducer.tripWfCost,
        entWfCost: state.specMachineReducer.entWfCost,
        climCost: state.specMachineReducer.climfCost,
        coefMo: state.specMachineReducer.coefMo,

    };
};

export default connect(mapStateToProps, { SettingModal, definiAttribut })(SettingModal);

