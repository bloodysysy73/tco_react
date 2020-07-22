import React from 'react';
import { Link } from 'react-router-dom'

import {
    Card,
    CardBody,
    CardFooter,
    //CardTitle,
    Row,
    Col
} from "reactstrap";

class ComplementSpec extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            extensionGarantie: "non",
            capture: "non",
            vgp: "non",
            pieceUsure: "non",
            lavage: "non",
            expertise: "non",
        };
    }

    setextensionGarantie(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ extensionGarantie: value });
        this.props.onchange(this.state);
    }

    setcapture(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ capture: value });
        this.props.onchange(this.state);
    }

    setvgp(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ vgp: value });
        this.props.onchange(this.state);
    }

    setpieceUsure(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ pieceUsure: value });
        this.props.onchange(this.state);
    }

    setlavage(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ lavage: value });
        this.props.onchange(this.state);
    }

    setepertise(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ lavage: value });
        this.props.onchange(this.state);
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
                                <p className="card-category">Compléments Spécifications</p>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <form className="ui form" onSubmit={this.onSubmitForm}>

                        <label>
                            Option Télématique myMECALAC :
        <select
                                name="machines"
                                //value={this.state.machine}
                                onChange={e => this.setcapture(e.target.value)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        <label>
                            Option VPG (Visite Générale Périodique) :
        <select
                                name="machines"
                                //value={this.state.machine}
                                onChange={e => this.setvgp(e.target.value)}
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
                                name="machines"
                                //value={this.state.machine}
                                onChange={e => this.setpieceUsure(e.target.value)}
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
                                name="machines"
                                //value={this.state.machine}
                                onChange={e => this.setlavage(e.target.value)}
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
                                //value={this.state.machine}
                                onChange={e => this.setexpertise(e.target.value)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        {/* <button className="ui button" >Submit</button> */}
                    </form>
                </CardFooter>
            </Card>
        );
    }
}

export default ComplementSpec;


