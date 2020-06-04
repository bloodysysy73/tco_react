import React from "react";
import { Line } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

import SpecMachine from 'components/formulaire/specMachine'
import ComplementSpec from "components/formulaire/complementSpec";
import Resume from "components/other/resume";
import AutresCouts from "components/formulaire/autreCouts";

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

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <SpecMachine onchange={(a) => this.onchange1(a)}></SpecMachine>
            </Col>
            <Col lg="3" md="6" sm="6">
              <ComplementSpec onchange={(a) => this.onchange2(a)} ></ComplementSpec>
            </Col>
            <Col lg="3" md="6" sm="6">
              <AutresCouts onchange={(a) => this.onchange3(a)} ></AutresCouts>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <CardTitle tag="p">+45K</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Resume></Resume>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={this.state.data3}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Users Behavior</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={this.state.data1}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
