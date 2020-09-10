import React from 'react';
import { defineTime } from 'actions';
import { connect } from "react-redux";


import {
    Card,
    CardFooter,
    CardBody,
    Col,
    Row
} from "reactstrap";

class InformationsCompl extends React.Component {


    handleChange(e) {

        this.props.defineTime(e.target.name, e.target.value);
    }

    render() {
        return (

            <Card className="card-stats">

                <CardBody>
                    <Row>
                        <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-bullet-list-67 text-warning" />
                            </div>
                        </Col>
                        <Col md="8" xs="7">
                            <div className="numbers">
                                <p className="card-category">Informations Complémentaires</p>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter><br />
                    <form className="ui form" onSubmit={this.onSubmitForm}>


                        <label>
                            Date:
<input
                                name="date"
                                type="text"
                                value={this.props.date}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Heure:
<input
                                name="heure"
                                type="text"
                                value={this.props.heure}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Lieu:
<input
                                name="lieu"
                                type="text"
                                value={this.props.lieu}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                    </form>

                </CardFooter>
            </Card>);
    }
}


const mapStateToProps = (state) => {
    return {
        date: state.infocomplementaireReducer.date,
        heure: state.infocomplementaireReducer.heure,
        lieu: state.infocomplementaireReducer.lieu
    };
};

export default connect(mapStateToProps, { defineTime })(InformationsCompl);