import React from 'react';
import { machinesSpec, clim, entretien250 } from "../../variables/specMachineVariable";
import { Link } from 'react-router-dom'

import { connect } from "react-redux";
import { definiOptionDeplacement } from 'actions/actionMachine'

import {
    Card,
    CardBody,
    CardFooter,
    //CardTitle,
    Row,
    Col
} from "reactstrap";

class SpecMachine extends React.Component {

    componentDidMount() {
        console.log("oiption de déplacement", this.props.optionDeplacement);
    }

    constructor(props) {
        super(props);
        this.state = {
            machineValue: null,
            nSerieValue: null,
            climValue: null,
            deplacementValue: null,
            dureeContratHValue: null,
            dureeContratAValue: null,
            entretien250Value: null,
            optionDeplacement: null
        };
    }

    setMachine(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ machineValue: value });
        this.props.onchange(this.state);
    }

    setNSerie(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ nSerieValue: value });
        this.props.onchange(this.state);
    }

    setClim(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ climValue: value });
        this.props.onchange(this.state);
    }

    setDeplacement(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ deplacementValue: value });
        this.props.onchange(this.state);
    }

    setDureeContratH(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ dureeContratHValue: value });
        this.props.onchange(this.state);
    }

    setDureeContratA(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ dureeContratAValue: value });
        this.props.onchange(this.state);
    }

    setEntretien250(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ entretien250: value });
        this.props.onchange(this.state);
    }

    setCheckbox(value) {
        console.log("la value de la ou tu viens de cliquer", value);
        this.setState({ optionDeplacement: value });
        this.props.onchange(this.state);
        this.props.definiOptionDeplacement(value);
    }


    render() {
        return (
            <Card className="card-stats">
                <CardBody>
                    <Row>
                        <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-spaceship text-warning" />
                            </div>
                        </Col>
                        <Col md="8" xs="7">
                            <div className="numbers">
                                <p className="card-category">Spécifications machine</p>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <form className="ui form" onSubmit={this.onSubmitForm}>

                        <label>
                            machines:
        <select
                                name="machines"
                                //value={this.state.machine}
                                onChange={e => this.setMachine(e.target.value)}
                                required>
                                <option key=""></option>
                                {machinesSpec.map(machine => (
                                    <option key={machine.id}>{machine.name}</option>
                                ))}
                            </select>
                        </label><br />

                        <label>
                            nSerie:
        <select
                                name="nSerie"
                                //value={nSerie}
                                onChange={e => this.setNSerie(e.target.value)}
                                required>
                                <option key=""></option>
                                {
                                    machinesSpec.map((machinesSpec, i) => {

                                        return machinesSpec.name === this.state.machineValue ? (

                                            machinesSpec.numSerie.map(numSerie => { return <option key={numSerie}>{numSerie}</option> })

                                        ) : <option hidden key={i} ></option>
                                    }
                                    )}
                            </select>
                        </label><br />

                        <label>
                            clim:
        <select
                                name="clim"
                                //value={clim}
                                onChange={e => this.setClim(e.target.value)}
                                required>
                                <option key=""></option>
                                {clim.map(clim => (
                                    <option key={clim}>{clim}</option>
                                ))}
                            </select>
                        </label><br />
                        <label>
                            Choix du type de deplacement:<br />
                            <div className="grouped fields">
                                <div className="field">
                                    <div className="ui slider checkbox">
                                        <input type="radio" name="throughput" onChange={e => this.setCheckbox("a")}
                                            checked={this.props.optionDeplacement === "a" ? true : false} />
                                        <label>Calculer le déplacement </label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui slider checkbox checked">
                                        <input type="radio" name="throughput" onChange={e => this.setCheckbox("b")}
                                            checked={this.props.optionDeplacement === "b" ? true : false} />
                                        <label>Définir un montant forfaitaire </label>
                                    </div>
                                </div>
                            </div>
                        </label><br />
                        <label>
                            Paramétrer le choix de déplacement:<br />
                            <Link to={this.props.optionDeplacement === 'a' ? '/admin/choixTypeModalA/' : '/admin/choixTypeModalB/'}
                                style={!this.props.optionDeplacement ? { pointerEvents: "none" } : null}>
                                <div className="ui animated button" tabIndex="0">
                                    <div className="visible content">Paramétrage</div>
                                    <div className="hidden content">
                                        <i aria-hidden="true" className="angle double right icon"></i>
                                    </div></div>
                            </Link>
                        </label><br />
                        <label>
                            dureeContratH:
        <input
                                name="dureeContratH"
                                type="number"
                                //value={dureeContratH}
                                min="1" max="5"
                                onChange={e => this.setDureeContratH(e.target.value)}
                                required />
                        </label><br />

                        <label>
                            dureeContratA:
        <input
                                name="dureeContratA"
                                type="number"
                                //value={dureeContratA}
                                min="1" max="5"
                                onChange={e => this.setDureeContratA(e.target.value)}
                                required />
                        </label><br />

                        <label>
                            Entretien des 250h:
        <select
                                name="entretien250"
                                //value={entretien250}
                                onChange={e => this.setEntretien250(e.target.value)}
                                required>
                                <option key=""></option>
                                {entretien250.map(entretien250 => (
                                    <option key={entretien250}>{entretien250}</option>
                                ))}
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
        optionDeplacement: state.machine.optionDeplacement
    };
};

export default connect(mapStateToProps, { definiOptionDeplacement })(SpecMachine);


