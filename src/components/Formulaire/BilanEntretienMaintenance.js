import React from 'react';

import {
    Card,
    CardFooter,
    CardBody,
    Row,
    Col
} from "reactstrap";

class BilanEntretienMaintenance extends React.Component {

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
                            <i className="nc-icon nc-single-copy-04 text-warning" />
                        </div>
                    </Col>
                    <Col md="8" xs="7">
                        <div className="numbers">
                            <p className="card-category">Bilan Entretien & Maintenance</p>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter><br />
                <form className="ui form">
                    <label>
                        Coût horaire entre :
                        <input
                            name="min"
                            type="number"
                            placeholder="h"
                            //value={dureeContratH}
                            onChange={e => this.setMin(e.target.value)}
                            required />
                    </label>&nbsp; <label> heures</label><br />
                    <label>et
                        <input
                            name="max"
                            type="number"
                            placeholder="h"
                            //value={dureeContratH}
                            onChange={e => this.setMax(e.target.value)}
                            required />
                    </label> &nbsp; <label> heures</label>
                </form><br />
                TOTAL - Entretien & maintenance : 
                &nbsp;<label>&nbsp; N/A &nbsp; </label>&nbsp;  € 
                &nbsp;<label>&nbsp; N/A &nbsp; </label>&nbsp; € / h 

            </CardFooter> 
        </Card>);
    
    }
}

export default BilanEntretienMaintenance;