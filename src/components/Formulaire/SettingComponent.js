import React from 'react';
import { connect } from "react-redux";
import { definiAttribut } from "../../actions/actionMachine" 
import { Link } from 'react-router-dom'




import {
    Card,
    CardFooter,
    CardBody,
    Col,
    Row
} from "reactstrap";

class SettingComponent extends React.Component {


    handleChange(e) {
        this.props.definiAttribut(e.target.name, e.target.value);
    }

    render() {
        return (
            <div className="content">
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
                                <p className="card-category">Paramètres concessionnaires</p>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter><br />
                    <form className="ui form" onSubmit={this.onSubmitForm}>
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
                        <Col md="6" xs="6">
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
                            </label><br />
                        </Col>
                        <Col md="6" xs="6">
                        
                        </Col>
                    </Row>

                    <Row>
                        <Col md="5" xs="5"></Col>
                        <Col md="2" xs="2">
                        <br /><label><br />
                                    <Link to="/admin/calculator" className="ui button">Valider</Link>
                                    </label><br />
                        </Col>
                        <Col md="5" xs="5"></Col>
                    </Row>

                       

                        </form>
                    </CardFooter>

                </Card></div>);
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

export default connect(mapStateToProps, { SettingComponent, definiAttribut })(SettingComponent);
