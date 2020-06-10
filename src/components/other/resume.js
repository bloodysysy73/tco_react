import React from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col
} from "reactstrap";

class Resume extends React.Component {
    render() {
        return <Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-zoom-split text-warning" />
                        </div>
                    </Col>
                    <Col md="8" xs="7">
                        <div className="numbers">
                            <p className="card-category">Résumé</p>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>

            <CardFooter>
                test<br />
test
            </CardFooter>
        </Card>
    }
}

export default Resume;