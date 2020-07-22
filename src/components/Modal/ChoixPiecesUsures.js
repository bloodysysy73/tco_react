import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'
import Modal from './Modaux'

import { connect } from "react-redux";
import { calculOption } from "../../actions/actionMachine"

import {
    Card,
    CardFooter,
    CardBody,
    CardTitle,
    Row,
    Col
} from "reactstrap";

/* Ce module calcule les frais liés aux options Pièces d'Usures
*/

class ChoixPiecesUsures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            optionA: 0,
            optionB: 0,
        };
    }

    setOptionA(value) {
        this.setState({ optionA: value });
    }

    setOptionB(value) {
        this.setState({ optionB: value });
    }

    setFreqOptionA(value) {
        this.setState({ freqOptionA: value });
    }

    setFreqOptionB(value) {
        this.setState({ freqOptionB: value });
    }
    

    OptionPieces(){
        let estimatedOptionPieces = parseFloat(this.state.optionA) + parseFloat(this.state.optionB) ;
        this.setState({ estimatedOptionPieces: estimatedOptionPieces });

        let OptionValue = {
            estimatedOptionPieces: estimatedOptionPieces,
            optionA: this.state.optionA,
            optionB: this.state.optionB,
        }

        this.props.OptionPieces(OptionValue);

    }

   renderContent = () => {
        return (
            <div className="content">
                <Card className="card-user">
                    <br />
                    <CardTitle>Choix des pièces d'usure prises en charge :  </CardTitle>
                    <CardBody>                        
                        <Row> 
                            <Col md="3" xs="3" // à ajuster et corriger pour sélectionner ou déselectionner toutes les options
                            >
                                <br />Tout sélectionner<label> 
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                            /> 
                                </label><br /></Col>
                            <Col md="3" xs="3">Prix</Col>
                            <Col md="3" xs="3">Périodicité</Col>
                            <Col md="3" xs="3">Prix Total</Col>
                        </Row>
                        <br />
                        <br />

                        <form className="ui form">
                        
                        <Row>
                            <Col md="3" xs="3">
                            <br />Option A <label> 
                                    <input
                                        type="checkbox"
                                        defaultChecked={this.state.i_agree}
                                        onChange={this.handleChange}
                                        /> 
                            </label><br />
                            </Col>
                            <Col md="3" xs="3">
                                Afficher Prix unitaire OptionA
                            </Col>
                            <Col md="3" xs="3">
                            <label>                            
                            <input
                                    name="FreqOptionA"
                                    type="number"
                                    placeholder="h"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    value={this.props.freqOptionA}
                                    min="0.4" max="0.8"
                                    onChange={e => this.setFreqOptionA(e.target.value)}
                                    required />
                            </label><br />
                            </Col>
                            <Col md="3" xs="3">
                                Afficher Prix Total OptionA
                            </Col>
                        </Row>

                        <Row>
                            <Col md="3" xs="3">
                            <br />Option B <label> 
                                    <input
                                        type="checkbox"
                                        defaultChecked={this.state.i_agree}
                                        onChange={this.handleChange}
                                        /> 
                            </label><br />
                            </Col>
                            <Col md="3" xs="3">
                                Afficher Prix unitaire OptionB
                            </Col>
                            <Col md="3" xs="3">
                            <label>                            
                            <input
                                    name="FreqOptionB"
                                    type="number"
                                    placeholder="h"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    value={this.props.freqOptionB}
                                    min="0.4" max="0.8"
                                    onChange={e => this.setFreqOptionA(e.target.value)}
                                    required />
                            </label><br />
                            </Col>
                            <Col md="3" xs="3">
                                Afficher Prix Total OptionB
                            </Col>
                        </Row> 
                        
                        <br />
                        <br />

                        <Row>
                            <Col ></Col>
                            <Col ></Col>
                            <Col >
                            <label>
                                Total :
                                    <input
                                    //Résultat du coût d'estimation estimé
                                    name="choixPiecesUsuresResult"
                                    type="number"
                                    value={this.props.estimatedOptionPieces}
                                    onChange={e => this.OptionPieces(e.target.value)}
                                    placeholder="€"
                                    style={{ direction: "rtl", textAlign: "right" }}
                                    required />
                            </label><br />
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col ></Col>
                            <Col ></Col>
                            <Col >
                            <label>
                                <br />
                                <div className="hidden content">
                                    <div className="ui button" onClick={() => this.OptionPieces()}>
                                        <i aria-hidden="true" className="calculator icon"></i>Calculer et Sauvegarder</div>
                                </div>
                            </label>
                            <br />
                            </Col>
                        </Row>
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
                title="ChoixPiecesUsures"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/admin/dashboard')}
            />
        )
    }


}


const mapStateToProps = (state) => {
    return {
        estimatedOptionPieces: state.specMachineReducer.estimatedOptionPieces,
    };
};

export default connect(mapStateToProps, { calculOption })(ChoixPiecesUsures);

