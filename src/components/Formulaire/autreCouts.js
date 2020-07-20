import React from 'react';
import LineAddedSerices from 'components/other/LineAddedServices'

import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col
} from "reactstrap";
import Incrementeur from 'components/other/Incrementeur';

class AutresCouts extends React.Component {


    render() {
        return (<Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-briefcase-24 text-warning" />
                        </div>
                    </Col>
                    <Col md="8" xs="7">
                        <div className="numbers">
                            <p className="card-category">Autres services ajoutés</p>
                            <p />
                        </div>
                    </Col>
                </Row><br />
                <LineAddedSerices></LineAddedSerices>
                <Incrementeur></Incrementeur>
            </CardBody>
            <CardFooter><br />

                TOTAL - Autres services ajoutés :
                &nbsp;<label>&nbsp; N/A &nbsp; </label>&nbsp;  €

            </CardFooter>
        </Card>);
    }
}

export default AutresCouts;