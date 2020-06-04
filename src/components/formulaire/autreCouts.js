import React from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";

class AutresCouts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            autre1: null,
            autreValue1: null,
            autre2: null,
            autreValue2: null,
            autre3: null,
            autreValue3: null,

        };
    }

    setAutre1(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ autre1: value });
        this.props.onchange(this.state);
    }

    setAutre2(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ autre2: value });
        this.props.onchange(this.state);
    }

    setAutre3(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ autre3: value });
        this.props.onchange(this.state);
    }

    setAutreValue1(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ autre1: value });
        this.props.onchange(this.state);
    }

    setAutreValue2(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ autre2: value });
        this.props.onchange(this.state);
    }

    setAutreValue3(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ autre3: value });
        this.props.onchange(this.state);
    }

    render() {
        return (<Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-danger" />
                        </div>
                    </Col>
                    <Col md="8" xs="7">
                        <div className="numbers">
                            <p className="card-category">Total</p>
                            <CardTitle tag="p">calcul</CardTitle>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter><br />
                <form className="ui form">
                    <label>
                        <input
                            name="autre1"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre1(e.target.value)}
                            required />
                    </label>
                    <label>
                        <input
                            name="autreValue1"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue1(e.target.value)}
                            required />
                    </label><br />

                    <label>
                        <input
                            name="autre2"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre2(e.target.value)}
                            required />
                    </label>
                    <label>
                        <input
                            name="autreValue2"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue2(e.target.value)}
                            required />
                    </label><br />

                    <label>
                        <input
                            name="autre3"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre3(e.target.value)}
                            required />
                    </label>
                    <label>
                        <input
                            name="autreValue3"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue3(e.target.value)}
                            required />
                    </label><br />
                </form>

            </CardFooter>
        </Card>);
    }
}

export default AutresCouts;