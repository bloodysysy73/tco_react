import React from 'react';
import { machinesSpec, clim, entretien250, categories, type } from "../../variables/specMachineVariable";
import { Link } from 'react-router-dom'

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

class SpecMachine extends React.Component {


    handleChangeCheckBox(e, value) {
        this.props.definiAttribut(e.target.name, value);
    }

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
                        <Row>
                            <Col md="6" xs="6">
                                <label>
                                    Catégories:
        <select
                                        name="categories"
                                        value={this.props.categories}
                                        onChange={e => this.handleChange(e)}
                                        required>
                                        <option key=""></option>
                                        {categories.map(categories => (
                                            <option key={categories}>{categories}</option>
                                        ))}
                                    </select>
                                </label><br />
                            </Col>
                            <Col md="6" xs="6">
                                <label>
                                    Type:
        <select
                                        name="type"
                                        value={this.props.type}
                                        onChange={e => this.handleChange(e)}
                                        required>
                                        <option key=""></option>
                                        {type.map(type => (
                                            <option key={type}>{type}</option>
                                        ))}
                                    </select>
                                </label><br />
                            </Col>

                        </Row>
                        <Row>
                            <Col md="6" xs="6">
                                <label>
                                    Modèle:
        <select
                                        name="machine"
                                        value={this.props.machine}
                                        onChange={e => this.handleChange(e)}
                                        required>
                                        <option key=""></option>
                                        {machinesSpec.map(machine => (
                                            <option key={machine.id}>{machine.gamme}</option>
                                        ))}
                                    </select>
                                </label><br />

                            </Col>
                            <Col md="6" xs="6">

                                <label>
                                    nSerie:
        <select
                                        name="nSerie"
                                        value={this.props.nSerie}
                                        onChange={e => this.handleChange(e)}
                                        required>
                                        <option key=""></option>
                                        {

                                            machinesSpec.map((machinesSpec, i) => {

                                                return machinesSpec.gamme === this.props.machine ? (

                                                    machinesSpec.numSerie.map(numSerie => { return <option key={numSerie}>{numSerie}</option> })

                                                ) : <option hidden key={i} ></option>
                                            }
                                            )}
                                    </select>

                                </label><br />

                            </Col>
                        </Row>

                        <label>
                            clim:
        <select
                                name="clim"
                                value={this.props.clim}
                                onChange={e => this.handleChange(e)}
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
                                        <input type="radio" name="optionDeplacement" onChange={e => this.handleChangeCheckBox(e, "a")}
                                            checked={this.props.optionDeplacement === "a" ? true : false} />
                                        <label>Calculer le déplacement </label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui slider checkbox checked">
                                        <input type="radio" name="optionDeplacement" onChange={e => this.handleChangeCheckBox(e, "b")}
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
                            Durée du contrat en mois:
        <input // Valeur par défault : 24 mois
                                name="dureeContratA"
                                type="number"
                                value={this.props.dureeContratA}
                                min="1" max="5"
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Durée du contrat en heures :
        <input // Valeur par défault : 3000 heures
                                name="dureeContratH"
                                type="number"
                                value={this.props.dureeContratH}
                                min="1" max="5"
                                onChange={e => this.handleChange(e)}
                                required />
                        </label><br />

                        <label>
                            Entretien des 250h:
        <select
                                name="entretien250"
                                value={this.props.entretien250}
                                onChange={e => this.handleChange(e)}
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
            </Card >
        );
    }
}


const mapStateToProps = (state) => {
    return {
        optionDeplacement: state.specMachineReducer.optionDeplacement,
        machine: state.specMachineReducer.machine,
        nSerie: state.specMachineReducer.nSerie,
        clim: state.specMachineReducer.clim,
        dureeContratH: state.specMachineReducer.dureeContratH,
        dureeContratA: state.specMachineReducer.dureeContratA,
        entretien250: state.specMachineReducer.entretien250,
        categories: state.specMachineReducer.categories,
        type: state.specMachineReducer.type,
    };
};

export default connect(mapStateToProps, { definiAttribut })(SpecMachine);


