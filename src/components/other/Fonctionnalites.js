import React from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col
} from "reactstrap";
import Printer from './Printer';

class Fonctionnalites extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return <Card className="card-stats">
            <CardBody>
                <Row>
                    <Col >
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-controller-modern text-warning" />
                        </div>
                    </Col>
                    <Col >
                        <div className="numbers">
                            <p className="card-category">Fonctionnalités</p>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <hr />

                <button className="ui vertical animated button">
                    <div className="hidden content"><Printer></Printer></div>
                    <div className="visible content"><i aria-hidden="true" className="print icon"></i></div>
                </button>
                <button className="ui vertical animated button">
                    <div className="hidden content">Calculer</div>
                    <div className="visible content"><i aria-hidden="true" className="calculator icon"></i></div>
                </button>
                <button className="ui vertical animated button">
                    <div className="hidden content">Help</div>
                    <div className="visible content"><i aria-hidden="true" className="help circle icon"></i></div>
                </button>
                <button className="ui vertical animated button">
                    <div className="hidden content">Setting</div>
                    <div className="visible content"><i aria-hidden="true" className="setting icon"></i></div>
                </button>
                <button className="ui vertical animated button">
                    <div className="hidden content">Excel</div>
                    <div className="visible content"><i aria-hidden="true" className="file excel icon"></i></div>
                </button>
            </CardFooter>
        </Card>
    }
}

export default Fonctionnalites;