import React from "react";
import InfoClientForm from "components/Formulaire/InfoClientForm";
import { Container, Row, Col } from "reactstrap";
import InformationsCompl from "components/Formulaire/InformationsCompl";



class InfoClient extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }
  render() {
    return (
      <>
        <div className="content">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col lg="6" md="6" sm="6">
                <InfoClientForm></InfoClientForm>
              </Col>
              <Col lg="6" md="6" sm="6">
              <InformationsCompl></InformationsCompl>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default InfoClient;