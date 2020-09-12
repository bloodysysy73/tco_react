import React from "react";
import { Container, Row, Col } from "reactstrap";
import Valider from "components/Valider/Valider";




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
            <div>A PROPOS DE CE CALCULATEUR</div>
            <Row className="justify-content-md-center">
            <Valider></Valider>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg="6" md="6" sm="6">
              <Valider></Valider>
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