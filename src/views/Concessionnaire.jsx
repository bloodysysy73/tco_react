import React from "react";
import { Container, Row, Col } from "reactstrap";
import InfoConcessForm from "components/Formulaire/InfoConcessForm";
import SettingComponent from "components/Formulaire/SettingComponent";




class Concessionnaire extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }
  render() {
    return (
      <>
        <div className="content">
          <Container>
            <div></div>
            <Row className="justify-content-md-center">
              <Col lg="6" md="6" sm="6">
              <InfoConcessForm></InfoConcessForm>
              </Col>
              <Col lg="6" md="6" sm="6">
              <SettingComponent></SettingComponent>
              </Col>
            </Row>
            

          </Container>
        </div>
      </>
    );
  }
}

export default Concessionnaire;