import React from 'react';
import { connect } from "react-redux";
import { defineTime } from 'actions';

import "assets/css/invoice.css";
import contact from "assets/img/contact.png";
import blue from "assets/img/blue.png";
import DisplayLines from 'components/other/DisplayLines';
import DisplayLinesExtension from 'components/other/DisplayLinesExtension';
import DisplayKits from 'components/other/DisplayKits';
import DisplayMoClim from 'components/other/DisplayMoClim';
import DisplayDeplacement from 'components/other/DisplayDeplacement';
import DisplayPieces from 'components/other/DisplayPieces';

class DevisCom extends React.Component {

    componentDidMount() {

        let today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.props.date ? console.log("date", this.props.date) : this.props.defineTime("date", date);

    }

    getTotal() {
        let total = parseFloat(this.props.prixExtension) + parseFloat(this.props.prixKits) + parseFloat((this.props.optionDeplacement === 'c') ? 0 : this.getDepCost()) + parseFloat((this.props.entretien250 === 'Client final') ? this.getMoCost() : (parseFloat(this.getMoCost())+(parseFloat(this.props.coefMo)*parseFloat(this.props.entWfCost)*parseFloat(this.props.heure250)*((parseInt(this.props.dureeContratH, 10))/500))));
        return Number.parseFloat(total).toFixed(2);
    }

    getDepCost() {
        let depCost1 = (parseFloat(this.props.prixForfait)*((parseInt(this.props.dureeContratH, 10))/500))
        let depCost2 = ((parseFloat(this.props.tripWfCost)*(parseFloat(this.props.geoScope)/(parseFloat(this.props.averageSpeed))))+((parseFloat(this.props.kmCost)*(parseFloat(this.props.geoScope)))))*((parseInt(this.props.dureeContratH, 10))/500)
        if (this.props.optionDeplacement === 'a') {
            return Number.parseFloat(depCost2).toFixed(2);
        } else { return Number.parseFloat(depCost1).toFixed(2);}
    }

    getMoCost() {
        let moCost = (parseFloat(this.props.heureMo) * parseFloat(this.props.entWfCost)*parseFloat((this.props.coefMo)))
        let moCost2 = (parseFloat(this.props.heureMo2) * parseFloat(this.props.entWfCost)*parseFloat(this.props.coefMo))
        if (this.props.clim === 'non') {
            return Number.parseFloat(moCost2).toFixed(2);
        } else { return Number.parseFloat(moCost).toFixed(2);}
    }

    

    render() {
        return (
            <div><div id="invoice">
                <div className="invoice overflow-auto">
                    <div style={{ minWidth: '600px' }}>
                        <header>
                            <div className="row">
                                <div className="col" >
                                <img src={blue} alt="blue" />
                                <a id="img" target="" href="https://www.mecalac.com/">
                                </a>
                                <h2 className="name">
                                        <a target="blank" href="https://www.mecalac.com/">
                                            MECALAC GROUP SERVICES</a> 
                                    </h2>
    
                                </div>
                                <div className="col company-details">
                                    <h2 className="to">{this.props.companyNameA}</h2>
                                    <h3 className="to">{this.props.prenomNomA}</h3>
                                    <div className="address">{this.props.adresseA}</div>
                                    <div className="ville">{this.props.villeA}</div>
                                    <div className="email"><a href={"mailto:" + this.props.emailA}>{this.props.emailA}</a></div>                                    
                                </div>
                            </div>
                        </header>
                        <main>
                            <div className="row contacts">
                                <div className="col invoice-to">
                                    <div className="text-gray-light">INVOICE TO:</div>
                                    <h2 className="to">{this.props.companyName}</h2>
                                    <h3 className="to">{this.props.prenomNom}</h3>
                                    <div className="address">{this.props.adresse}</div>
                                    <div className="email"><a href={"mailto:" + this.props.email}>{this.props.email}</a></div>
                                </div>
                                <div className="col invoice-details">
                                    <h1 className="invoice-id">MECALAC CALCULATOR</h1>
                                    <div className="date">  Date: {this.props.date}</div>
                                    <div className="date">  Lieu: {this.props.villeA} ; {this.props.lieu}</div>
                                    <div className="Label">Label: FR 30/07/2020</div>
                                    <div className="Order type">Order type: FR</div>
                                </div>
                            </div>
                            <div className="row contacts">
                                <div> Numéro de contrat : {this.props.nbContrat} </div>
                            </div>
                            <div className="col specMachine">
                                    <div className="text-gray-light">Specifications machine :</div>
                                    <h3 className="to">{this.props.machine} - {this.props.numSerie} - {this.props.categories} - {this.props.type}</h3>
                            </div>
                            <table border="0" cellSpacing="0" cellPadding="0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th className="text-left">DESCRIPTION</th>
                                        <th className="text-right"></th>
                                        <th className="text-right"></th>
                                        <th className="text-right">COÛT A L'HEURE ({this.props.dureeContratH} heures)</th>
                                        <th className="text-right"></th>


                                        <th className="text-right">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><label> Entretien et maintenance : </label></tr>
                                    <DisplayDeplacement
                                           label="Déplacement"
                                           optionDeplacement={this.props.optionDeplacement}
                                           tripWfCost={this.props.tripWfCost}                                           
                                           geoScope={this.props.geoScope}
                                           averageSpeed={this.props.averageSpeed}
                                           kmCost={this.props.kmCost}
                                           prixForfait={this.props.prixForfait}
                                           dureeContratH={this.props.dureeContratH}
                                    ></DisplayDeplacement>

                                    <DisplayMoClim
                                        label="Main d'oeuvre"
                                        heureMo={this.props.heureMo}
                                        heureMo2={this.props.heureMo2}
                                        heure250={this.props.heure250}
                                        entretien250={this.props.entretien250}
                                        clim={this.props.clim}
                                        entWfCost={this.props.entWfCost}
                                        coefMo={this.props.coefMo}
                                        dureeContratH={this.props.dureeContratH}
                                    ></DisplayMoClim>
                                    
                                    <DisplayKits
                                        label='Kits'
                                        prixKits={this.props.prixKits}
                                        dureeContratH={this.props.dureeContratH}
                                    ></DisplayKits>

                                    <DisplayPieces
                                        label='Pièces'
                                        prixPieces={this.props.prixPieces}
                                        dureeContratH={this.props.dureeContratH}
                                    ></DisplayPieces>

                                    
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td colSpan="4">Total entretien et maintenace</td>
                                        <td> € {(this.props.dureeContratH) ? (this.getTotal()-parseFloat(this.props.prixExtension)).toFixed(2): 0}</td>
                                        
                                    </tr>
                                    
                                    <DisplayLinesExtension
                                        label='Extenson de garantie'
                                        prixExtension={this.props.prixExtension}
                                        dureeContratH={this.props.dureeContratH}
                                    ></DisplayLinesExtension>

                                    <DisplayLines
                                        lines={this.props.lines}
                                        totalCost_autreService={this.props.totalCost_autreService}
                                        dureeContratH={this.props.dureeContratH}
                                    ></DisplayLines>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td colSpan="4">GRAND TOTAL</td>
                                        <td>{(this.props.totalCost_autreService) ? (parseFloat(this.getTotal())+parseFloat(this.props.totalCost_autreService)).toFixed(2) : this.getTotal() } € </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td colSpan="4">Coût à l'heure</td>
                                        <td>{((this.props.totalCost_autreService) ? ((parseFloat(this.getTotal())+parseFloat(this.props.totalCost_autreService))/ (parseInt(this.props.dureeContratH, 10))).toFixed(2) : ((this.getTotal()) / (parseInt(this.props.dureeContratH, 10))).toFixed(2))} € /heure</td>
                                    </tr>  
                                </tfoot>
                            </table>
                            <div className="notices">
                                <div>Commentaires et précisions : </div>
                                <p>{this.props.textBox}</p>
                            </div>                            
                        </main>
                        <footer>
                            Ce devis a été généré avec le configurateur de contrat de service de MECALAC
                        <div> <img src={contact} alt="Contact" />
                                <a id="img" target="" href="https://www.mecalac.com/">
                                </a>
                                <div>services-parts@mecalac.com</div>
                            </div>
                        </footer>
                    </div>
                    <div></div>
                </div>
            </div>
            </div>
        );
    }



}

const mapStateToProps = (state) => {
    return {
        companyNameA: state.concessReducer.companyNameA,
        prenomNomA: state.concessReducer.prenomNomA,
        adresseA: state.concessReducer.adresseA,
        villeA: state.concessReducer.villeA,
        emailA: state.concessReducer.emailA,
        companyName: state.clientReducer.companyName,
        prenomNom: state.clientReducer.prenomNom,
        adresse: state.clientReducer.adresse,
        email: state.clientReducer.email,
        date: state.infocomplementaireReducer.date,
        lieu: state.infocomplementaireReducer.lieu,
        lines: state.serviceAjoutesReducer.lines ? Object.values(state.serviceAjoutesReducer.lines) : null,
        prixExtension: state.specMachineReducer.prixExtension,
        totalCost_autreService: state.serviceAjoutesReducer.totalCost_autreService,
        dureeContratH: state.specMachineReducer.dureeContratH,
        prixKits: state.specMachineReducer.prixKits,
        heureMo: state.specMachineReducer.heureMo,
        heureMo2: state.specMachineReducer.heureMo2,
        heure250: state.specMachineReducer.heure250,
        entretien250: state.specMachineReducer.entretien250,
        clim: state.specMachineReducer.clim,
        prixForfait: state.specMachineReducer.prixForfait,
        optionDeplacement: state.specMachineReducer.optionDeplacement,
        geoScope: state.specMachineReducer.geoScope,
        kmCost: state.specMachineReducer.kmCost,
        averageSpeed: state.specMachineReducer.averageSpeed,
        tripWfCost: state.specMachineReducer.tripWfCost,
        entWfCost: state.specMachineReducer.entWfCost,
        coefMo: state.specMachineReducer.coefMo,
        prixPieces: state.specMachineReducer.prixPieces,
        numSerie: state.specMachineReducer.numSerie,
        machine: state.specMachineReducer.machine,
        type: state.specMachineReducer.type,
        categories: state.specMachineReducer.categories,
        nbContrat: state.concessReducer.nbContrat,
        textBox: state.textBoxReducer.textBox,

    };
};



export default connect(mapStateToProps, { defineTime })(DevisCom);