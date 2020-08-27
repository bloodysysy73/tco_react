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
import Fourniture from "components/Formulaire/Fourtniture";


class Dashboard extends React.Component {


  render() {
    return (
      <>
        <div className="content">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col lg="6" md="6" sm="6">
                <SpecMachine></SpecMachine>
                <Fourniture></Fourniture>
              </Col>
              <Col lg="6" md="6" sm="6">
                <MachineFleet></MachineFleet>
                <ComplementSpec></ComplementSpec>               
              </Col>
              </Row>
              <Row>
              <Col lg="12" md="6" sm="6" >
                
                  <AutresCouts></AutresCouts>
                  <Fonctionnalites></Fonctionnalites>
                  
               </Col>
              
            </Row>
            <Row className="justify-content-md-center">

              <Col md="12">
                <Devis></Devis>
                <MachineView></MachineView>
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