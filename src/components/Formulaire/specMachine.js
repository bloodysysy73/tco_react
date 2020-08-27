import React from 'react';
import { machinesSpec, clim, entretien250, categories, type, dureeContratH, dureeContratM } from "../../variables/specMachineVariable";
import { Link } from 'react-router-dom'
import { extensionGarantie } from '../../variables/extensionGarantie'

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

    componentDidMount() {
        this.props.definiAttribut("dureeContratH", "3000");
        this.props.definiAttribut("dureeContratM", "24");

    }


    handleChangeCheckBox(e, value) {
        this.props.definiAttribut(e.target.name, value);
    }

    handleChange(e) {
        this.props.definiAttribut(e.target.name, e.target.value);

        if (e.target.name === 'machine') {
            this.defineFamilyServices(e.target.value);
        }
    }

    // TODO : cette fonction doit attendre la MAJ du store 
    defineFamilyServices(machine) {
        machinesSpec.map((machinesSpec, i) => {
            return machinesSpec.gamme === machine ? this.props.definiAttribut('familyServices', machinesSpec.familyServices) : ''
        }
        )
    }

    handleChangeExtension(e) {
        this.props.definiAttribut(e.target.name, e.target.value);

        let dureeContratM = this.props.dureeContratM
        let dureeContratH = this.props.dureeContratH
        let familyServices = this.props.familyServices

        if (e.target.name === 'dureeContratM') { dureeContratM = e.target.value }
        if (e.target.name === 'dureeContratH') { dureeContratH = e.target.value }

        let index_X;
        let index_Y;

        switch (dureeContratM) {
            case "24": index_X = 0;
                break
            case "36": index_X = 1;
                break
            case "48": index_X = 2;
                break
            case "60": index_X = 3;
                break
            default: index_X = 0;
        }

        switch (dureeContratH) {
            case "3000": index_Y = 0;
                break
            case "3500": index_Y = 1;
                break
            case "4000": index_Y = 2;
                break
            case "4500": index_Y = 3;
                break
            case "5000": index_Y = 4;
                break
            case "5500": index_Y = 5;
                break
            case "6000": index_Y = 6;
                break
            case "6500": index_Y = 7;
                break
            case "7000": index_Y = 8;
                break
            case "7500": index_Y = 9;
                break
            case "8000": index_Y = 10;
                break
            case "8500": index_Y = 11;
                break
            case "9000": index_Y = 12;
                break
            case "9500": index_Y = 13;
                break
            case "10000": index_Y = 14;
                break
            default: index_Y = 0;

        }

        extensionGarantie.map((extensionGarantie, i) => {
            console.log("index_X", index_X);
            console.log("index_y", index_Y);
            console.log("familyServices", familyServices);

            if (extensionGarantie.familyServices === familyServices) { return this.props.definiAttribut('prixExtension', extensionGarantie.prix[index_X][index_Y]) }
            else { return '' }
        }
        )

    }



    render() {
        return (
            <Card className="card-stats">
                <CardBody>
                    <Row>
                        <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-settings text-warning" />
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

                        <Row> <Col md="12" xs="12"><br /> Indiquer les spécifications de la machine choisie : <br /></Col></Row>


                        <Row>
                            <Col md="6" xs="6">
                                <label>
                                    Catégories :
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
                                    Type :
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
                                    Modèle :
        <select
                                        name="machine"
                                        value={this.props.machine}
                                        onChange={e => this.handleChange(e)}
                                        required>
                                        <option key=""></option>
                                        {

                                            machinesSpec.map((machinesSpec, i) => {

                                                // return machinesSpec.categorie === this.props.categories ? <option key={i}> {machinesSpec.gamme}  </option> : <option hidden key={i} ></option>
                                                return machinesSpec.type === this.props.type ? <option key={i}> {machinesSpec.gamme}  </option> : <option hidden key={i} ></option>
                                            }
                                            )}
                                    </select>

                                </label><br />

                            </Col>
                            <Col md="6" xs="6">

                                <label>
                                    Numéro de Serie :
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
                            Climatisation :
                            <select
                                name="clim"
                                defaultValue="oui"
                                value={this.props.clim}
                                onChange={e => this.handleChange(e)}
                                required>
                                <option key=""></option>
                                {clim.map(clim => (
                                    <option key={clim}>{clim}</option>
                                ))}
                            </select>
                        </label><br />

                        <Row> <Col md="12" xs="12"><br /> Définir la durée du contrat de service : <br /></Col></Row>

                        <Row>
                            <Col md="6" xs="6">
                                <label>
                                    Durée du contrat en mois :
                        <select // Par défault 24 mois
                                        name="dureeContratM"
                                        value={this.props.dureeContratM}
                                        defaultValue="24"
                                        onChange={e => this.handleChangeExtension(e)}
                                        required>
                                        <option key=""></option>
                                        {dureeContratM.map(dureeContratM => (
                                            <option key={dureeContratM}>{dureeContratM}</option>
                                        ))}
                                    </select>
                                </label><br />


                                <label>
                                    Durée du contrat en heures :
                        <select // Par défault 3000 heures
                                        name="dureeContratH"
                                        value={this.props.dureeContratH}
                                        defaultValue="3000"
                                        onChange={e => this.handleChangeExtension(e)}
                                        required>
                                        <option key=""></option>
                                        {dureeContratH.map(dureeContratH => (
                                            <option key={dureeContratH}>{dureeContratH}</option>
                                        ))}
                                    </select>
                                </label><br /></Col>

                            <Col md="6" xs="6">
                                <br />
                                <label>
                                    <div className="grouped fields">
                                        <div className="field">
                                            <div className="ui slider checkbox">
                                                <input type="radio" name="optionExtension" readOnly
                                                    checked={this.props.dureeContratM > 24 || this.props.dureeContratH > 3000 ? true : false} />
                                                <label>Extension de garranties </label>
                                            </div>
                                        </div>
                                    </div>
                                </label><br />

                                <label>
                                    <div className="grouped fields">
                                        <div className="field">
                                            <div >
                                                <label>Coût Extension de garantie : </label><br />
                                                &nbsp; {this.props.prixExtension} €

                                            </div>
                                        </div>
                                    </div>
                                </label><br />

                            </Col>
                        </Row>

                        <Row> <Col md="12" xs="12"><br /> Définir qui assurera l'entretien des 250 heures :<br /></Col></Row>


                        <label>
                            Entretien des 250h:
                            <select
                                name="entretien250"
                                defaultValue="Concessionnaire"
                                value={this.props.entretien250}                                
                                onChange={e => this.handleChange(e)}
                                required>
                                <option key=""></option>
                                {entretien250.map(entretien250 => (
                                    <option key={entretien250}>{entretien250}</option>
                                ))}
                            </select>
                        </label><br />

                        <Row> <Col md="12" xs="12"><br /> Sélectioner la méthode de calcul d'un déplacement :<br /></Col></Row>

                        <Row>
                            <Col md="6" xs="6">
                                <label>
                                    <div className="grouped fields">

                                        <div className="field">
                                            <div className="ui slider checkbox">
                                                <input type="radio" name="optionDeplacement" onChange={e => this.handleChangeCheckBox(e, "a")}
                                                    checked={this.props.optionDeplacement === "a" ? true : false} />
                                                <label>Calculer le déplacement </label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui slider checkbox">
                                                <input type="radio" name="optionDeplacement" onChange={e => this.handleChangeCheckBox(e, "b")}
                                                    checked={this.props.optionDeplacement === "b" ? true : false} />
                                                <label>Définir un montant forfaitaire </label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui slider checkbox checked">
                                                <input type="radio" name="optionDeplacement" onChange={e => this.handleChangeCheckBox(e, "c")}
                                                    checked={this.props.optionDeplacement === "c" ? true : false} />
                                                <label>Ne pas choisir de facturer le déplacement </label>
                                            </div>
                                        </div>
                                    </div>
                                </label><br />
                            </Col>
                            <Col md="6" xs="6">
                                <br />
                                <br /><label>
                                    <Link to={this.props.optionDeplacement === 'a' ? '/admin/choixTypeModalA/' : '/admin/choixTypeModalB/ '}
                                        style={!this.props.optionDeplacement || this.props.optionDeplacement === 'c' ? { pointerEvents: "none" } : null}>
                                        <div className="ui animated button" tabIndex="0">
                                            <div className="visible content">Paramétrer la méthode de calcul d'un déplacement</div>
                                            <div className="hidden content">
                                                <i aria-hidden="true" className="angle double right icon"></i>
                                            </div></div>
                                    </Link>
                                </label><br />
                            </Col>
                        </Row>

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
        entretien250: state.specMachineReducer.entretien250,
        categories: state.specMachineReducer.categories,
        type: state.specMachineReducer.type,
        dureeContratM: state.specMachineReducer.dureeContratM,
        dureeContratH: state.specMachineReducer.dureeContratH,
        prixExtension: state.specMachineReducer.prixExtension,
        familyServices: state.specMachineReducer.familyServices
    };
};

export default connect(mapStateToProps, { definiAttribut })(SpecMachine);


