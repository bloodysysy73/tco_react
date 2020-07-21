import React from 'react';

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
                            Option Télématique :
        <select
                                name="capture"
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
                                name="vgps"
                                //value={this.state.machine}
                                onChange={e => this.setvgp(e.target.value)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        <label>
                            Option pièces d'usure :
        <select
                                name="pieceUsure"
                                //value={this.state.machine}
                                onChange={e => this.setpieceUsure(e.target.value)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        <label>
                            Option lavage :
        <select
                                name="lavage"
                                //value={this.state.machine}
                                onChange={e => this.setlavage(e.target.value)}
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


