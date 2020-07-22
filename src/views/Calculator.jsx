import React from "react";
import {
  Row,
  Col,
  Container
} from "reactstrap";


import SpecMachine from 'components/Formulaire/specMachine';
import ListCouts from "components/Formulaire/ListCouts";
import Fonctionnalites from "components/other/Fonctionnalites";
// import MachineView from "components/Images/MachineView"
import DevisCom from "components/Devis/DevisCom";


class Calculator extends React.Component {


  render() {
    return (
      <>
        <div className="content">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col lg="4" md="6" sm="6">
                <SpecMachine></SpecMachine>
                
              </Col>
              <Col lg="8" md="6" sm="6">
                <ListCouts></ListCouts>
                <Fonctionnalites></Fonctionnalites>
              </Col>
            </Row>

            <Row className="justify-content-md-center">
              <Col md="12">
                <DevisCom></DevisCom>
              </Col>
            </Row>

            <Row>
              <Col md="12">

              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Calculator;