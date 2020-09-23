import React from "react";
import {
  Row,
  Col,
  Container
} from "reactstrap";


import SpecMachine from 'components/Formulaire/specMachine';
import ComplementSpec from 'components/Formulaire/complementSpec';
import ListCouts from "components/Formulaire/ListCouts";
import Fonctionnalites from "components/other/Fonctionnalites";
import MachineView from "components/Images/MachineView"
import DevisCom from "components/Devis/DevisCom";
import TextBox from "components/other/TextBox";


class Calculator extends React.Component {


  render() {
    return (
      <>
        <div className="content">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col lg="5" md="6" sm="6">
                <SpecMachine dureeContratH={this.props.dureeContratH} dureeContratM={this.props.dureeContratM}></SpecMachine>
                <ComplementSpec></ComplementSpec>  
                
              </Col>
              <Col lg="7" md="6" sm="6">
                 
                <ListCouts></ListCouts>
                
                
                <Fonctionnalites></Fonctionnalites>
                <TextBox></TextBox>
              </Col>
            </Row>

            <Row className="justify-content-md-center">
              <Col md="12">
              
                <DevisCom></DevisCom>
                
              </Col>
            </Row>

            <Row>
              <Col md="12">
              <MachineView></MachineView>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Calculator;