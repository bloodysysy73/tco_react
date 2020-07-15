import React from "react";
import {
  Row,
  Col,
  Container
} from "reactstrap";


import SpecMachine from 'components/Formulaire/specMachine';
import ComplementSpec from "components/Formulaire/complementSpec";
import AutresCouts from "components/Formulaire/autreCouts";
import BilanEntretienMaintenance from "components/Formulaire/BilanEntretienMaintenance"
import Fonctionnalites from "components/other/Fonctionnalites";
import MachineView from "components/Images/MachineView"
import MachineFleet from "components/Images/MachineFleet";
import Devis from "components/Devis/Devis";


class Dashboard extends React.Component {


  render() {
    return (
      <>
        <div className="content">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col lg="4" md="6" sm="6">
                <SpecMachine></SpecMachine>
                <Fonctionnalites></Fonctionnalites>
              </Col>
              <Col lg="4" md="6" sm="6">
                <MachineFleet></MachineFleet>
                <ComplementSpec></ComplementSpec>
                <BilanEntretienMaintenance></BilanEntretienMaintenance>
              </Col>
              <Col lg="4" md="6" sm="6" >
                <Row>
                  <AutresCouts></AutresCouts>

                  <MachineView></MachineView>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-md-center">

              <Col md="12">
                <Devis></Devis>

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

export default Dashboard;