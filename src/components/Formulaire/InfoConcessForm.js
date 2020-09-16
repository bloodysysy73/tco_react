import React from 'react';
import { definiInfoConcess } from 'actions';
import { connect } from "react-redux";


import {
    Card,
    CardFooter,
    CardBody,
    Col,
    Row
} from "reactstrap";

class InfoConcessForm extends React.Component {


    handleChange(e) {

        this.props.definiInfoConcess(e.target.name, e.target.value);
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
                                <p className="card-category">Informations Concess</p>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter><br />
                    <form className="ui form" onSubmit={this.onSubmitForm}>
                    <Row> <Col md="12" xs="12"><br /> <br /><br /></Col></Row> 
                    <Row>
                        <Col md="12" xs="12">
                       <label>
                            Nom du concessionnaire :
<input
                                name="companyNameA"
                                type="text"
                                value={this.props.companyNameA}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Nom et prénom de la personne en charge :
<input
                                name="prenomNomA"
                                type="text"
                                value={this.props.prenomNomA}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Adresse :
<input
                                name="adresseA"
                                type="text"
                                value={this.props.adresseA}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Ville :
<input
                                name="villeA"
                                type="text"
                                value={this.props.villeA}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Email :
                        <input
                                name="emailA"
                                type="text"
                                value={this.props.emailA}
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br /><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" xs="12">
                        <label>
                             Numéro de contrat :
                        
                        <input                                    
                                    name="nbContrat"
                                    type="text"
                                    placeholder="WEB005720"
                                    value={this.props.nbContrat}
                                    style={{ direction: "rtl", textAlign: "left" }}
                                    onChange={e => this.handleChange(e)}
                                    required />
                            </label><br />
                            </Col>
                    </Row>



                        {/* <button className="ui button" >Submit</button> */}
                    </form>

                </CardFooter>
            </Card>);
    }
}


const mapStateToProps = (state) => {
    return {
        companyNameA: state.concessReducer.companyNameA,
        prenomNomA: state.concessReducer.prenomNomA,
        adresseA: state.concessReducer.adresseA,
        emailA: state.concessReducer.emailA,
        nbContrat: state.concessReducer.nbContrat,
    };
};

export default connect(mapStateToProps, { definiInfoConcess })(InfoConcessForm);