import React from 'react';

import {
    Card,
    CardBody,
    CardFooter,
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
            autre4: null,
            autreValue4: null,
            autre5: null,
            autreValue5: null,
            autre6: null,
            autreValue6: null,
            autre7: null,
            autreValue7: null,
            autre8: null,
            autreValue8: null,
            autre9: null,
            autreValue9: null,

        };
    }

    setAutre1(value) {
        this.setState({ autre1: value });
    }

    setAutre2(value) {
        this.setState({ autre2: value });
    }

    setAutre3(value) {
        this.setState({ autre3: value });
    }

    setAutreValue1(value) {
        this.setState({ autre1: value });
    }

    setAutreValue2(value) {
        this.setState({ autre2: value });
    }

    setAutreValue3(value) {
        this.setState({ autre3: value });
    }

    setAutreValue4(value) {
        this.setState({ autre4: value });
    }

    setAutreValue5(value) {
        this.setState({ autre5: value });
    }

    setAutreValue6(value) {
        this.setState({ autre6: value });
    }

    setAutreValue7(value) {
        this.setState({ autre7: value });
    }

    setAutreValue8(value) {
        this.setState({ autre8: value });
    }

    setAutreValue9(value) {
        this.setState({ autre9: value });
    }

    render() {
        return (<Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-briefcase-24 text-warning" />
                        </div>
                    </Col>
                    <Col >
                        <div className="numbers">
                            <p className="card-category">Autres services ajoutés</p>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter><br />
            <Row>
                    <Col md="4" xs="5"> Nom de l'élément</Col>
                    <Col md="4" xs="5"> Coût de l'élémént</Col>
                    <Col md="4" xs="5"> Ajouter l'élément</Col>
                    </Row>
                <form className="ui form">
                    <label>
                        <input
                            name="autre1"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre1(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue1"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue1(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />

                    <label>
                        <input
                            name="autre2"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre2(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue2"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue2(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />

                    <label>
                        <input
                            name="autre3"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre3(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue3"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue3(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />

                    <label>
                        <input
                            name="autre4"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre3(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue4"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue3(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />

                    <label>
                        <input
                            name="autre5"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre3(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue5"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue3(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />

                    <label>
                        <input
                            name="autre6"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre3(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue6"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue3(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />

                    <label>
                        <input
                            name="autre7"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre3(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue7"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue3(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />

                    <label>
                        <input
                            name="autre8"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre3(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue8"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue3(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />

                    <label>
                        <input
                            name="autre9"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre3(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue9"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue3(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />

                    <label>
                        <input
                            name="autre10"
                            type="text"
                            //value={dureeContratH}
                            onChange={e => this.setAutre10(e.target.value)}
                            required />
                    </label>&nbsp;
                    <label>
                        <input
                            name="autreValue6"
                            type="number"
                            //value={dureeContratH}
                            min="1" max="5"
                            onChange={e => this.setAutreValue3(e.target.value)}
                            required />
                    </label>&nbsp; € &nbsp; &nbsp;
                    <label> 
                        <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> Clicker pour ajouter
                    </label><br />
                </form>

                TOTAL - Autres services ajoutés : 
                &nbsp;<label>&nbsp; N/A &nbsp; </label>&nbsp;  € 

            </CardFooter>
        </Card>);
    }
}

export default AutresCouts;