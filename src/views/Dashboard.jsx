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
import AutresCouts from "components/Formulaire/autreCouts";
import BilanEntretienMaintenance from "components/Formulaire/BilanEntretienMaintenance"
import Fonctionnalites from "components/other/Fonctionnalites";
import ExtensionWarranty from "components/Formulaire/ExtensionWarranty"
import MachineView from "components/Images/MachineView"
import MachineFleet from "components/Images/MachineFleet";
import Devis from "components/other/Devis";


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
                <Fonctionnalites></Fonctionnalites>
              </Col>
              <Col lg="3" md="6" sm="6">
                <MachineFleet></MachineFleet>
                <ComplementSpec onchange={(a) => this.onchange2(a)} ></ComplementSpec>
                <BilanEntretienMaintenance onchange={(a) => this.onchange4(a)} ></BilanEntretienMaintenance>
              </Col>
              <Col lg="3" md="6" sm="6" >
                <Row>
                  <AutresCouts onchange={(a) => this.onchange3(a)} ></AutresCouts>
                  <ExtensionWarranty onchange={(a) => this.onchange5(a)} ></ExtensionWarranty>
                  <MachineView></MachineView>
                </Row>
                {/* <Row>
                  <Fonctionnalites></Fonctionnalites>
                </Row> */}
              </Col>
            </Row>
            <Row className="justify-content-md-center">

              <Col md="9">
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
