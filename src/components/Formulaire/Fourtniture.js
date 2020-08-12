import React from 'react';

import {
    Card,
    CardFooter,
    CardBody,
    Row,
    Col
} from "reactstrap";

class Fourniture extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            min: null,
            max: null
        };
    }

    setMin(value) {
        this.setState({ min: value });
    }

    setMax(value) {
        this.setState({ max: value });
    }

    render() {
        return (<Card className="card-stats">

            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-warning" />
                        </div>
                    </Col>
                    <Col md="8" xs="7">
                        <div className="numbers">
                            <p className="card-category">Autres Options</p>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter><br />
                <form className="ui form">
                    <label>
                        Petite fourniture :
                        <input
                            name="min"
                            type="number"
                            placeholder="€/h"
                            
                            onChange={e => this.setMin(e.target.value)}
                            required />
                    </label>&nbsp; <label> € / heure
                        </label><br />
                    
                    <label>Fofait recyclage pièces
                        <input
                            name="max"
                            type="number"
                            placeholder="€/intervention"
                            
                            onChange={e => this.setMax(e.target.value)}
                            required />
                    </label> &nbsp; <label> € / intervention </label>
                </form><br />

            </CardFooter> 
        </Card>);
    
    }
}

export default Fourniture;