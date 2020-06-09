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

                <button class="ui vertical animated button">
                    <div class="hidden content"><Printer></Printer></div>
                    <div class="visible content"><i aria-hidden="true" class="print icon"></i></div>
                </button>
                <button class="ui vertical animated button">
                    <div class="hidden content">Calculer</div>
                    <div class="visible content"><i aria-hidden="true" class="calculator icon"></i></div>
                </button>
                <button class="ui vertical animated button">
                    <div class="hidden content">Help</div>
                    <div class="visible content"><i aria-hidden="true" class="help circle icon"></i></div>
                </button>
                <button class="ui vertical animated button">
                    <div class="hidden content">Setting</div>
                    <div class="visible content"><i aria-hidden="true" class="setting icon"></i></div>
                </button>
                <button class="ui vertical animated button">
                    <div class="hidden content">Excel</div>
                    <div class="visible content"><i aria-hidden="true" class="file excel icon"></i></div>
                </button>
            </CardFooter>
        </Card>
    }
}

export default Fonctionnalites;