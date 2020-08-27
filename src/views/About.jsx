import React from "react";
import { Container, Row, Col } from "reactstrap";
import InfoConcessForm from "components/Formulaire/InfoConcessForm";



class About extends React.Component {

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
            <div>ABOUT MECALAC COMPONENT HERE</div>
            <Row className="justify-content-md-center">
              <Col lg="6" md="6" sm="6">
              <InfoConcessForm></InfoConcessForm>
              </Col>
              <Col lg="6" md="6" sm="6">
              </Col>
            </Row>

          </Container>
        </div>
      </>
    );
  }
}

export default About;