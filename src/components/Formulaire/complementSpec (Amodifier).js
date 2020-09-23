import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { definiAttribut } from 'actions/actionMachine'

import {
    Card,
    CardBody,
    CardFooter,
    //CardTitle,
    Row,
    Col
} from "reactstrap";

class ComplementSpec extends React.Component {

    handleChange(e) {
        this.props.definiAttribut(e.target.name, e.target.value);
    }

    render() {
        return (
            <Card className="card-stats">
                <CardBody>
                    <Row>
                        <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-bullet-list-67 text-warning" />
                            </div>
                        </Col>
                        <Col md="8" xs="7">
                            <div className="numbers">
                                <p className="card-category">Options</p>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <form className="ui form" onSubmit={this.onSubmitForm}>

                        <label>
                            Option Télématique MyMECALAC :
        <select
                                name="telematique"
                                defaultValue="non"
                                value={this.props.telematique}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />
                        
                        <label>
                            Option VGP (Visite Générale Périodique) :
        <select
                                name="vgp"
                                defaultValue="non"
                                value={this.props.vgp}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br /> <br />



                        <Row>
                        <Col md="6" xs="6">
                        <label>
                            Option pièces d'usure :
        <select
                                name="pieceUsure"
                                defaultValue="non"
                                value={this.props.pieceUsure}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label>
                        </Col>
                        <Col md="6" xs="6">
                                <br /><label>
                                <Link to="/admin/choixPiecesUsures" 
                                        className="ui animated button" tabIndex="0">
                                            <div className="visible content">Paramétrer les options</div>
                                            <div className="hidden content">
                                                <i aria-hidden="true" className="angle double right icon"></i>
                                            </div>
                                    </Link>
                                </label><br />
                            </Col>
                    </Row>
                    <br />
                        <label>
                            Option lavage :
        <select
                                name="lavage"
                                defaultValue="non"
                                value={this.props.lavage}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        <label>
                            Option Expertise de fin de garantie :
        <select
                                name="expertise"
                                defaultValue="non"
                                value={this.props.expertise}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        <label>
                            Option reprise et réglages :
        <select
                                name="reprise"
                                defaultValue="non"
                                value={this.props.reprise}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        <label>
                            Option Analyses polution :
        <select
                                name="analysePol"
                                defaultValue="non"
                                value={this.props.analysePol}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        <label>
                            Option pret de machines :
        <select
                                name="pretMachine"
                                defaultValue="non"
                                value={this.props.pretMachine}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        <label>
                        Petite fourniture :
                        <input
                            name="petiteFourniture"
                            type="number"
                            placeholder="€/h"
                            
                            value={this.props.petiteFourniture}                                
                            onChange={e => this.handleChange(e)}
                            required />
                    </label>&nbsp; <label> € / heure
                        </label><br />
                    
                    <label>Fofait recyclage pièces
                        <input
                            name="recyclagePieces"
                            type="number"
                            placeholder="€/intervention"
                            
                            value={this.props.recyclagePieces}                                
                            onChange={e => this.handleChange(e)}
                            required />
                    </label> &nbsp; <label> € / intervention </label>

                        {/* <button className="ui button" >Submit</button> */}
                    </form>
                </CardFooter>
            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        telematique: state.specMachineReducer.telematique,
        vgp: state.specMachineReducer.vgp,
        pieceUsure: state.specMachineReducer.pieceUsure,
        lavage: state.specMachineReducer.lavage,
        expertise: state.specMachineReducer.expertise,
        reprise: state.specMachineReducer.reprise,
        analysePol: state.specMachineReducer.analysePol,
        pretMachine: state.specMachineReducer.pretMachine,
        petiteFourniture: state.specMachineReducer.petiteFourniture,
        recyclagePieces: state.specMachineReducer.recyclagePieces,

    };
};

export default connect(mapStateToProps, { definiAttribut })(ComplementSpec);


