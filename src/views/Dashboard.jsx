import React from "react";
import {
  Row,
  Col,
  Container
} from "reactstrap";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

import SpecMachine from 'components/Formulaire/specMachine';
import ComplementSpec from "components/Formulaire/complementSpec";
import Resume from "components/other/resume";
import AutresCouts from "components/Formulaire/autreCouts";
import BilanEntretienMaintenance from "components/Formulaire/BilanEntretienMaintenance"
import Fonctionnalites from "components/other/Fonctionnalites";



class Dashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data1: dashboard24HoursPerformanceChart.data,
      option1: dashboard24HoursPerformanceChart.options,

      data2: dashboardEmailStatisticsChart.data,
      option2: dashboardEmailStatisticsChart.options,

      data3: dashboardNASDAQChart.data,
      option3: dashboardNASDAQChart.options
    }
  }

  onchange1(a) {
    console.log("la value coté dashbord", a);
  }
  onchange2(a) {
    console.log("la value coté dashbord", a);
  }
  onchange3(a) {
    console.log("la value coté dashbord", a);
  }
  onchange4(a) {
    console.log("la value coté dashbord", a);
  }

  onchange5(a) {
    console.log("la value coté dashbord", a);
  }



  render() {
    return (
      <>
        <div className="content">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col lg="3" md="6" sm="6">
                <SpecMachine onchange={(a) => this.onchange1(a)}></SpecMachine>
              </Col>
              <Col lg="3" md="6" sm="6">
                <ComplementSpec onchange={(a) => this.onchange2(a)} ></ComplementSpec>
              </Col>
              <Col lg="3" md="6" sm="6" >
                <Row>
                  <AutresCouts onchange={(a) => this.onchange3(a)} ></AutresCouts>
                  <Fonctionnalites></Fonctionnalites>
                </Row>
                {/* <Row>
                  <Fonctionnalites></Fonctionnalites>
                </Row> */}
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="3">
                <BilanEntretienMaintenance onchange={(a) => this.onchange4(a)} ></BilanEntretienMaintenance>
              </Col>
              <Col md="7">
                <Resume></Resume>
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
