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

    OptionPieces() {
        let estimatedOptionPieces = parseFloat(this.state.optionA) + parseFloat(this.state.optionB);

        let OptionValue = {
            estimatedOptionPieces: estimatedOptionPieces,
            optionA: this.state.optionA,
            optionB: this.state.optionB,
            optionC: this.state.optionC,
            optionD: this.state.optionD,
            optionE: this.state.optionE,
            optionF: this.state.optionF,
            optionG: this.state.optionG,
            optionH: this.state.optionH,
            optionI: this.state.optionI,
            optionJ: this.state.optionJ,
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
                            <Col md="4" xs="4" // à ajuster et corriger pour sélectionner ou déselectionner toutes les options
                            >
                                Tout sélectionner  <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked={this.state.i_agree}
                                        onChange={this.handleChange}
                                    />
                                </label><br /></Col>
                            <Col md="2" xs="2">Prix</Col>
                            <Col md="3" xs="3">Périodicité</Col>
                            <Col md="3" xs="3">Prix Total</Col>
                        </Row>
                        <br />
                        <br />
                        <br />

                        <form className="ui form">

                            <Row>
                                <Col md="4" xs="4">
                                    Chenilles aciers <label>
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    0
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
                                    0
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    Chenilles caoutchouc <label>
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    Afficher Prix unitaire
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
                                            onChange={e => this.setFreqOptionB(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    Pneus <label>
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    Afficher Prix unitaire
                            </Col>
                                <Col md="3" xs="3">
                                    <label>
                                        <input
                                            name="FreqOptionC"
                                            type="number"
                                            placeholder="h"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.freqOptionC}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setFreqOptionC(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    Pneus larges <label>
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    Afficher Prix unitaire
                            </Col>
                                <Col md="3" xs="3">
                                    <label>
                                        <input
                                            name="FreqOptionD"
                                            type="number"
                                            placeholder="h"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.freqOptionD}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setFreqOptionD(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    Ppneus jumelées <label>
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    Afficher Prix unitaire
                            </Col>
                                <Col md="3" xs="3">
                                    <label>
                                        <input
                                            name="FreqOptionE"
                                            type="number"
                                            placeholder="h"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.freqOptionE}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setFreqOptionE(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    Bagues d'usure <label>
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    Afficher Prix unitaire
                            </Col>
                                <Col md="3" xs="3">
                                    <label>
                                        <input
                                            name="FreqOptionF"
                                            type="number"
                                            placeholder="h"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.freqOptionF}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setFreqOptionF(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    Patins de stabilisateurs <label>
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    Afficher Prix unitaire
                            </Col>
                                <Col md="3" xs="3">
                                    <label>
                                        <input
                                            name="FreqOptionG"
                                            type="number"
                                            placeholder="h"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.freqOptionG}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setFreqOptionG(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    Balais d'essui glace <label>
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    Afficher Prix unitaire
                            </Col>
                                <Col md="3" xs="3">
                                    <label>
                                        <input
                                            name="FreqOptionH"
                                            type="number"
                                            placeholder="h"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.freqOptionH}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setFreqOptionH(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    Batteries <label>
                                        <input
                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    Afficher Prix unitaire
                            </Col>
                                <Col md="3" xs="3">
                                    <label>
                                        <input
                                            name="FreqOptionI"
                                            type="number"
                                            placeholder="h"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.freqOptionI}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setFreqOptionI(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    Démareurs <label>
                                        <input

                                            type="checkbox"
                                            defaultChecked={this.state.i_agree}
                                            onChange={this.handleChange}
                                        />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    <label>
                                        <input
                                            name="PriceOptionJ"
                                            type="number"
                                            placeholder="euros"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.priceOptionJ}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setPriceOptionJ(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    <label>
                                        <input
                                            name="FreqOptionJ"
                                            type="number"
                                            placeholder="h"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.freqOptionJ}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setFreqOptionJ(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
                            </Col>
                            </Row>

                            <Row>
                                <Col md="4" xs="4">
                                    <label>
                                        <input
                                            name="NomOptionK"
                                            type="number"
                                            placeholder="Nom de la pièce"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.nomOptionK}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setNomOptionK(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="2" xs="2">
                                    <label>
                                        <input
                                            name="PriceOptionK"
                                            type="number"
                                            placeholder="euros"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.priceOptionK}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setPriceOptionK(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    <label>
                                        <input
                                            name="FreqOptionK"
                                            type="number"
                                            placeholder="h"
                                            style={{ direction: "rtl", textAlign: "right" }}
                                            value={this.props.freqOptionK}
                                            min="0.4" max="0.8"
                                            onChange={e => this.setFreqOptionK(e.target.value)}
                                            required />
                                    </label><br />
                                </Col>
                                <Col md="3" xs="3">
                                    Afficher Prix Total
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
                                            //Résultat du calcul d'estimation du coût des options Pièces d'usure
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
                onDismiss={() => history.push('/admin/calculator')}
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

