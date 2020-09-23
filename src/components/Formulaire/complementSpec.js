import React from 'react';
import { connect } from "react-redux";
import { definiAttribut } from 'actions/actionMachine'

import {
    Card,
    CardBody,
    CardFooter,
    //CardTitle,
    Row,
    Col
} from "reactstrap";

class ComplementSpec extends React.Component {

    handleChange(e) {
        this.props.definiAttribut(e.target.name, e.target.value);
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
                                <p className="card-category">Options</p>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <form className="ui form" onSubmit={this.onSubmitForm}>
                    Télématique MyMECALAC <br />
                        <label>
                            Télématique MyMECALAC (montage de série ou en usine) 
        <select
                                name="telematique"
                                defaultValue="non"
                                value={this.props.telematique}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label>
                        <label> Installation en retrofit (machine en activité) &nbsp; &nbsp; &nbsp;
                                        <input
                                            name="retrofit"
                                            type="checkbox"
                                            defaultChecked={this.retrofit}
                                            onChange={e => this.handleChange(e)}
                                        />
                                    </label><br />
                        
                        <br />


                        <label>
                            Option Expertise de fin de garantie :
        <select
                                name="expertise"
                                defaultValue="non"
                                value={this.props.expertise}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                {/* <option key=""></option> */}
                                <option key={"non"}>non</option>
                                <option key={"oui"}>oui</option>
                            </select>
                        </label><br />

                        {/* <button className="ui button" >Submit</button> */}
                    </form>
                </CardFooter>
            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        telematique: state.specMachineReducer.telematique,
        pretMachine: state.specMachineReducer.pretMachine,
        vgp: state.specMachineReducer.vgp,
        pieceUsure: state.specMachineReducer.pieceUsure,
        lavage: state.specMachineReducer.lavage,
        expertise: state.specMachineReducer.expertise,
        reprise: state.specMachineReducer.reprise,
        analysePol: state.specMachineReducer.analysePol,
        petiteFourniture: state.specMachineReducer.petiteFourniture,
        recyclagePieces: state.specMachineReducer.recyclagePieces,
        retrofit: state.specMachineReducer.retrofit,
        margeTele: state.specMachineReducer.margeTele,

    };
};

export default connect(mapStateToProps, { definiAttribut })(ComplementSpec);


