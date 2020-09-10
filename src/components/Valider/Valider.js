import React from "react";
import { Link } from 'react-router-dom'

import {
  Card,
  CardFooter,
  CardBody,
  Col,
  Row
} from "reactstrap";

class Valider extends React.Component {
  render() {
    return (
        <div className="content">
            <Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-settings-gear-65 text-warning" />
                        </div>
                    </Col>
                    <Col md="8" xs="7">
                        <div className="numbers">
                            <p className="card-category">Valider les paramètres concessionnaires</p>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter><br />
            <Row>
            <Col md="5" xs="5"></Col>
            <Col md="2" xs="2">
                        <label><br />
                        <Link to="/admin/calculator" className="ui button">Valider</Link>
                        </label><br />
            </Col>
            <Col md="5" xs="5"></Col>
            </Row>

            </CardFooter>

            </Card></div>);
    
  }
}


export default Valider;