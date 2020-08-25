import React from 'react';
import { definiInfoClient } from 'actions';
import { connect } from "react-redux";


import {
    Card,
    CardFooter,
    CardBody,
    Col,
    Row
} from "reactstrap";

class InfoClientForm extends React.Component {


    handleChange(e) {

        this.props.definiInfoClient(e.target.name, e.target.value);
    }

    render() {
        return (

            <Card className="card-stats">

                <CardBody>
                    <Row>
                        <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-single-copy-04 text-warning" />
                            </div>
                        </Col>
                        <Col md="8" xs="7">
                            <div className="numbers">
                                <p className="card-category">Informations Client</p>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter><br />
                    <form className="ui form" onSubmit={this.onSubmitForm}>


                        <label>
                            Nom de l'entreprise cliente :
<input
                                name="companyName"
                                type="text"
                                value={this.props.companyName}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Nom et prénom de la personne en charge :
<input
                                name="prenomNom"
                                type="text"
                                value={this.props.prenomNom}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Adresse:
<input
                                name="adresse"
                                type="text"
                                value={this.props.adresse}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Email :
                        <input
                                name="email"
                                type="text"
                                value={this.props.email}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />



                        {/* <button className="ui button" >Submit</button> */}
                    </form>

                </CardFooter>
            </Card>);
    }
}


const mapStateToProps = (state) => {
    return {
        companyName: state.clientReducer.companyName,
        prenomNom: state.clientReducer.prenomNom,
        adresse: state.clientReducer.adresse,
        email: state.clientReducer.email,
    };
};

export default connect(mapStateToProps, { definiInfoClient })(InfoClientForm);