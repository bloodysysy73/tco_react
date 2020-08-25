import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'
import Modal from './Modaux'
import { connect } from "react-redux";

import {
    Card,
    CardFooter,
    CardBody,
    CardTitle,
    Row,
    Col
} from "reactstrap";


class SettingModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripWfCost: 0,
            entWfCost: 0,
            climCost: 0,
            timeOpe1: 0,
            timeOpe2: 0,
            timeOpe3: 0,
            timeOpe4: 0,
        };
    }

    renderContent = () => {
        return (
            <div className="content">
                <Card className="card-user">
                    <br />
                    <CardTitle>Paramètres concessionnaires</CardTitle>
                    <CardBody>

                    <Row> <Col md="12" xs="12"><br /> Tarif de la main d'oeuvre <br /><br /></Col></Row> 
                    <Row>
                        <Col md="12" xs="12">
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
                                    onChange={e => this.setTripWfCost(e.target.value)}
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
                                    onChange={e => this.setEntWfCost(e.target.value)}
                                    required />
                            </label><br /><br />
                            </Col>
                            </Row>



                    <Row> <Col md="12" xs="12"><br /> Climatisation <br /></Col></Row> 
                    <Row>
                        <Col md="12" xs="12">
                        <label>
                                Prix de la recharge de gaz :
                        <input
                                    // Une intervention au 3000 heures
                                    name="climCost"
                                    type="number"
                                    placeholder="€"
                                    value={this.props.climCost}
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    min="1" max="100"
                                    onChange={e => this.setClimCost(e.target.value)}
                                    required />
                            </label><br /><br />
                        </Col>
                        <Col md="6" xs="6">
                        </Col>
                    </Row>


                    <Row> <Col md="12" xs="12"><br /> Liste des opérations et leur durée en heure<br /><br /></Col></Row> 
                        <Row> 
                            <Col md="4" xs="4">
                            Nom des opérations
                            </Col>
                            <Col md="4" xs="4" // à ajuster et corriger pour sélectionner ou déselectionner toutes les options
                            >
                            Tout sélectionner  <label> 
                                <input
                                    type="checkbox"
                                    defaultChecked={this.state.i_agree}
                                    onChange={this.handleChange}
                                    /> 
                                </label><br /></Col>
                            <Col md="3" xs="3">Paramétrer les durées <br /><br /></Col>
                        </Row>


                            <Row>
                            <Col md="5" xs="5">
                            Filtre gasoil 
                            </Col>
                            <Col md="2" xs="2">
                                
                                0.17 h <label> 
                                    <input
                                    // Coût horaire par défault
                                        type="checkbox"
                                        defaultChecked={this.state.i_agree}
                                        onChange={this.handleChange}
                                        /> 
                            </label>
                            </Col>
                            <Col md="2" xs="2">
                            <label>                            
                            <input
                                    name="timeOpe1"
                                    type="number"
                                    placeholder="h"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    value={this.props.timeOpe1}
                                    min="0.4" max="0.8"
                                    onChange={e => this.setTimeOpe1(e.target.value)}
                                    required />
                            </label><br />
                            </Col>
                        </Row> 

                        <Row>
                            <Col md="5" xs="">
                            Purge air circuit gasoil 
                            </Col>
                            <Col md="2" xs="2">
                                
                                0.25 h <label> 
                                    <input
                                    // Coût horaire par défault
                                        type="checkbox"
                                        defaultChecked={this.state.i_agree}
                                        onChange={this.handleChange}
                                        /> 
                            </label>
                            </Col>
                            <Col md="3" xs="3">
                            <label>                            
                            <input
                                    name="timeOpe2"
                                    type="number"
                                    placeholder="h"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    value={this.props.timeOpe2}
                                    min="0.4" max="0.8"
                                    onChange={e => this.setTimeOpe2(e.target.value)}
                                    required />
                            </label><br />
                            </Col>
                        </Row> 

                        <Row>
                            <Col md="5" xs="5">
                            préfiltre gasoil 
                            </Col>
                            <Col md="2" xs="2">
                                
                                0.17 h <label> 
                                    <input
                                    // Coût horaire par défault
                                        type="checkbox"
                                        defaultChecked={this.state.i_agree}
                                        onChange={this.handleChange}
                                        /> 
                            </label>
                            </Col>
                            <Col md="3" xs="3">
                            <label>                            
                            <input
                                    name="timeOpe3"
                                    type="number"
                                    placeholder="h"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    value={this.props.timeOpe3}
                                    min="0.4" max="0.8"
                                    onChange={e => this.setTimeOpe3(e.target.value)}
                                    required />
                            </label><br />
                            </Col>
                        </Row> 

                        <Row>
                            <Col md="5" xs="5">
                            Opération 4 
                            </Col>
                            <Col md="2" xs="2">
                                
                                0.17 h <label> 
                                    <input
                                    // Coût horaire par défault
                                        type="checkbox"
                                        defaultChecked={this.state.i_agree}
                                        onChange={this.handleChange}
                                        /> 
                            </label>
                            </Col>
                            <Col md="3" xs="3">
                            <label>                            
                            <input
                                    name="timeOpe4"
                                    type="number"
                                    placeholder="h"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    value={this.props.timeOpe4}
                                    min="0.4" max="0.8"
                                    onChange={e => this.setTimeOpe4(e.target.value)}
                                    required />
                            </label><br />
                            </Col>
                        </Row> 
 


                        

                        <label>
                                <br />
                                <div className="hidden content">
                                    <div className="ui button" onClick={() => this.saveSetting()}>
                                        <i aria-hidden="true" className="setting icon"></i>Enregistrer les paramètres</div>
                                </div>
                            </label>
                        <br />


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
                title="Paramètres"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/admin/dashboard')}
            />
        )
    }


}


const mapStateToProps = (state) => {
    return {
        tripWfCost: state.specMachineReducer.tripWfCost,
        entWfCost: state.specMachineReducer.entWfCost,
        climCost: state.specMachineReducer.climfCost,
        timeOpe1: state.specMachineReducer.timeOpe1,
        timeOpe2: state.specMachineReducer.timeOpe2,
        timeOpe3: state.specMachineReducer.timeOpe3,
        timeOpe4: state.specMachineReducer.timeOpe4
    };
};

export default connect(mapStateToProps, { SettingModal })(SettingModal);
