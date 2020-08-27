import React from 'react';
import LineAddedSerices from 'components/other/LineAddedServices'
import { definiAttribut_sa } from 'actions/actionServiceajoutes'
import { connect } from "react-redux";


import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col
} from "reactstrap";
import Incrementeur from 'components/other/Incrementeur';

class ListCouts extends React.Component {


    render() {
        return (<Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-briefcase-24 text-warning" />
                        </div>
                    </Col>
                    <Col md="8" xs="7">
                        <div className="numbers">
                            <p className="card-category">Liste des services ajoutés</p>
                            <p />
                        </div>
                    </Col>
                </Row><br />
                <LineAddedSerices></LineAddedSerices>
                <Incrementeur></Incrementeur>
            </CardBody>
            <CardFooter><br />

                TOTAL - Autres services ajoutés :
                &nbsp;<label>&nbsp;{this.props.totalCost_autreService} &nbsp; </label>&nbsp;  €

            </CardFooter>
        </Card>);
    }

    updatetotalcost() {
        let tot_cost = 0;
        if (this.props.lines) {
            this.props.lines.map((line, i) => {

                console.log('i', i)
                console.log('line[]', line)

                return tot_cost = tot_cost + line.cost;
            })

            this.props.definiAttribut_sa('totalCost_autreService', tot_cost);
        }
        return '';
    }
}



const mapStateToProps = (state) => {
    return {
        lines: state.serviceAjoutesReducer.lines ? Object.values(state.serviceAjoutesReducer.lines) : null,
        totalCost_autreService: state.serviceAjoutesReducer.totalCost_autreService
    };
};
export default connect(mapStateToProps, { definiAttribut_sa })(ListCouts);
